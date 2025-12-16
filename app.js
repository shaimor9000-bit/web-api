const express = require('express');
const app=express();
const productrouter=require('./api/v1/routes/product');


//https:localhost:5050/product
app.use('/product',router);


moudle.exports=app;