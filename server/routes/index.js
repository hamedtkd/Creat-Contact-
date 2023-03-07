const express = require('express')
const { handleSignup, handleLogin } = require('../controller/auth')
const { creatContact, findContact } = require('../controller/contacts')
// const { handleSaveUser, handleSendData } = require('../controller/Users')
const router = express.Router()
exports.handleCreatUser=router.post('/signup',handleSignup)
exports.handleSendDataFromDb=router.post('/login',handleLogin)
exports.handleCreatContact=router.post('/contacts',creatContact)
exports.handlefindContacts=router.post('/contact',findContact)


