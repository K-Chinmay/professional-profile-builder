const dotenv = require('dotenv');

const mongoose  = require('mongoose');
const cookieParser = require('cookie-parser')

const express = require('express');


const app = express();
app.use(cookieParser());
dotenv.config({path:'./.env'});

const PORT = process.env.PORT;
require('./db/conn');
app.use(express.json());
// const User = require('./models/userSchema');
// lik the router files
app.use(require('./router/auth'));

app.get('/',(req,res)=> {
    res.send(`hello world`);
});
// app.get('/about',(req,res)=> {

//     console.log("hello about");
//     res.send(`hello about`);
// });
// app.get('/contact',(req,res)=> {
//     res.send(`hello contact`);
// });
app.get('/signin',(req,res)=> {
    res.send(`hello signin`);
});
app.get('/signup',(req,res)=> {
    res.send(`hello signup`);
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})