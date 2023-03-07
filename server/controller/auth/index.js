const bcrypt = require('bcrypt');
const {
    json
} = require('express');
const moment = require('jalali-moment');
const {
    Users
} = require('../../model/User');

const jwt = require('jsonwebtoken');


const handleSignup = async (req, res) => {
    const {
        password,
        email,
        confirmPassword
    } = req.body
    if (!password)
        return res.status(400).json({
            massage: 'Enter password'
        })
    if (!email)
        return res.status(400).json({
            massage: 'Enter email'
        })
    if (!confirmPassword)
        return res.status(400).json({
            massage: 'Enter confirmPassword'
        })
    if (password !== confirmPassword)
        return res.status(400).json({
            massage: 'password is not matching'
        })
    const isUser = await Users.findOne({
        email
    })
    if (isUser)
        return res.status(400).json({
            massage: 'User alredy exist'
        })
    const date = new Date()
    const jalaliDate = moment(date.toLocaleDateString(), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD');

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = new Users({
        email,
        password: hashedPass,
        jalaliDate
    })
    await newUser.save().then(res.status(201).json({
        massage: 'User created!',

    }))
}
const handleLogin = async (req, res) => {
    const {
        password,
        email,
    } = req.body
    if (!password)
        return res.status(400).json({
            massage: 'Enter password'
        })
    if (!email)
        return res.status(400).json({
            massage: 'Enter email'
        })

    const isUser = await Users.findOne({
        email
    })
    // console.log(isUser);
    if (!isUser)
        return res.status(404).json({
            massage: 'User not found'
        })

    bcrypt.compare(password, isUser.password, (error, result) => {
        if (result){
            const tokenDetail = {
                id: isUser._id,
                email
            } 
            const token = jwt.sign(tokenDetail,'secertCode')
            return res.status(200).json({
                massage: 'User login!',
                token
            })
        }
        res .status(404, json({
            massage: 'EMAIL OR PASSWORD IS INCORRECT',

        }))

    })
    // res.status(201, json({
    //     massage: 'User login!',
    //     hashedPass
    // }))

}

module.exports = {
    handleSignup,
    handleLogin
}