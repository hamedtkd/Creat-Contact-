const express = require('express')
const { handleSignup, handleLogin } = require('../controller/auth')
const { creatContact, findContact, updateContact, deleteContact } = require('../controller/contacts')
// const { handleSaveUser, handleSendData } = require('../controller/Users')
const router = express.Router()
exports.handleCreatUser=router.post('/signup',handleSignup)
exports.handleSendDataFromDb=router.post('/login',handleLogin)
exports.handleCreatContact=router.post('/contacts',creatContact)
exports.handleFindContacts=router.get('/contact',findContact)
exports.handleUpdateContacts=router.put('/contact',updateContact)
exports.handleDeleteContacts=router.post('/contact',deleteContact)




