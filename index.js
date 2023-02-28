const express = require('express')
const index = express()
const cors = require("cors");
const mongoose= require('mongoose')
index.use(express.json());
index.use(cors());

const url = 'mongodb+srv://shivam82:chill247@cluster0.nbl4sez.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser:true})
mongoose.connection.on('open', function(){
    console.log("connected to database")
})

const studentRouter = require('./routes/students')
index.use('/students', studentRouter)


index.listen(9000, function (){
    console.log("server started")
})
