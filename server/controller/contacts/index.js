const {
    Contacs
} = require("../../model/Contacts");
const moment = require('jalali-moment');

const creatContact = async (req, res) => {
    const {
        name,
        number,
        token,
    } = req.body
    if (!name)
        return res.status(400).json({
            massage: 'Enter name'
        })
    if (!number)
        return res.status(400).json({
            massage: 'Enter number'
        })
    if (!token)
        return res.status(400).json({
            massage: 'you must login first'
        })

    function parseJwt(token) {
        return (JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()));
    }
    const user = parseJwt(token)
    const date = new Date()
    const jalaliDate = moment(date.toLocaleDateString(), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD');
    const newContacts = new Contacs({
        name,
        number,
        jalaliDate,
        user: user.email,
        id: user.id
    })
    await newContacts.save().then(res.status(201).json({
        massage: 'Contact created!',

    }))
}
const findContact = async (req, res) => {
    const {
        token
    } = req.body

    if (!token)
        return res.status(404).json({
            massage: 'Something wrong! You must login first!',
        })
    function parseJwt(token) {
        return (JSON.parse(Buffer.from(token?.split('.')[1], 'base64').toString()));
    }
    const user = parseJwt(token)
    const id = user.id
    const contacts = await Contacs.find({ id })
    // console.log(contacts);
    return res.status(200).json({
        massage: 'Users you craeted',
        contacts
    })
}
module.exports = {
    creatContact,
    findContact
}