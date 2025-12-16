require(`dotenv`).config();

const express = require('express');
const app=express();
const productrouter=require('./api/v1/routes/product');

const mongoUser=process.env.MONGO_USER;
const mongoPass=process.env.MONGO_PASS;
const mongopass=process.env.MONGO_SERVER;

const mongoconnstr=`mongodb+srv://${mongoUser}:${mongoPass} @${mongoServer}/?appName=ecomm`

//https:localhost:5050/product
app.use('/product',router);
//הוספתי סתם שורה

moudle.exports=app;