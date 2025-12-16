

module.exports={
getallproducts:(req,res)=>{
    return res.status(200).json({message:`all products`});
},
getproductbyid: (req,res)=>{
    return res.status(200).json({message:'get product by id'})
}, 
updateproductbyid :(req,res)=>{
    let id=req.params.id;
    return res.status(200).json({message:`update product id ${id}`})
    
    
},
deleteproductbyid:(req,res)=>{
    return res.status(200).json({message:`delete product id ${id}`})
    
    
},
addproduct:(req,res)=>{
    return res.status(200).json({message:`newproduct`});
}

};