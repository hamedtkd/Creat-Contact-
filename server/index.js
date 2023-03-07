const appRootPath = require('app-root-path')

// const { User } = require('./model/User');

const express = require('express')

const cors = require('cors');

const mongoose = require('mongoose');

const server = express()
// const { handleSaveUser } = require('./controller/Users');
const { handleCreatUser, handleCreatContact} = require('./routes');


mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/creatContact').then(res => {
    console.log('app conected')
});

server.use(cors())

server.use(express.json({
    extended: false
}))

require('dotenv').config({
    path: appRootPath + '/.env'
})
// const userfinded=User.find()
// console.log(userfinded);
// server.use('/' ,handleSendDataFromDb );


server.use('/',handleCreatUser)

server.use('/',handleCreatContact)


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server runnig at:${PORT}`))