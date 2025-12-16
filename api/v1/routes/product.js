const express=require('express');
const router =require('express').router();
const productcontroller=require('../controllers/product');
const {getallproducts,getproductbyid,addproduct,updateproductbyid,deleteproductbyid}=require('../controllers/product');


router.get('/')=express.router();

router.get('/',getallproducts); 

router.get('/:id',getproductbyid); 

router.post('/',addproduct); 

router.put('/;id',updateproductbyid);

app.delete('/',deleteproductbyid); 



router.get('code','route');

moudle.exports=app;