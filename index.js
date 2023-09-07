const express=require('express');
const app=express();





const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/userDB'

mongoose
.connect(mongoURI)
.then(()=> {console.log('meow')})

























app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(3000)