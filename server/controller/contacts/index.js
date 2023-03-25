const {
    Contacs
} = require("../../model/Contacts");
const moment = require('jalali-moment');

const creatContact = async (req, res) => {
    const {
        name,
        number,
    } = req.body
    const {
        authorization
    } = req.headers;
    const token = authorization
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
        authorization
    } = req.headers;

    const token = authorization
    if (!token)
        return res.status(404).json({
            massage: 'Something wrong! You must login first!',
        })

    function parseJwt(token) {
        return (JSON.parse(Buffer.from(token ?.split('.')[1], 'base64').toString()));
    }
    const user = parseJwt(token)
    const id = user.id
    const contacts = await Contacs.find({
        id
    })
    // console.log(contacts);
    return res.status(200).json({
        massage: 'Users you craeted',
        contacts
    })
}
const updateContact = async (req, res) => {
    const {
        data
    } = req.body
    const id = data._id
    const contact = await Contacs.findByIdAndUpdate(id, {
        name: data ?.name,
        number: data ?.number
    })
    return res.status(200).json({
        message: "contact updated!"
    })

}
const deleteContact = async (req, res) => {
    const {
        id
    } = req.body
    if(id) {
        const contact = await Contacs.findByIdAndDelete(id)
        return res.status(200).json({
            message: "contact Deleted!!"
        })}
        else{
            return res.status(400).json({
                message: "sorry please try again!"
            })
        }


}
module.exports = {
    creatContact,
    findContact,
    updateContact,
    deleteContact
}