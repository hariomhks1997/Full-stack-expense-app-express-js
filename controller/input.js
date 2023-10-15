const path=require("path");
const rootDir = require('../util/path');
const Product=require("../models/product")
const fs=require("fs")

exports.getinput=(req,res,next)=>{
  Product.findAll()
    .then(products => {
      
      // console.log(products)
     fs.writeFileSync("usernametxt",`${JSON.stringify(products)}`)
      

     next()

   

    })
    .catch(err => console.log(err));
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
    

}
exports.postinput=(req,res,next)=>{
    const id=Math.random().toString();
    const username=req.body.username;
    const email=req.body.email;
    const mobile=req.body.mobileno;
    const edit=req.body.edit;
   

   if(edit==""){



   Product.create({
    id1:id,
   username:username,
   email:email,
   mobile:mobile,


  })
    .then(result => {
  // console.log(result);

     res.redirect("/")


    })
    .catch(err => {
      console.log(err);
    });
}else{
    Product.findByPk(edit)
    .then(product => {
      product.username = username;
      product.id1= id;
      product.mobile = mobile;
      product.email = email;
      return product.save();
    })
    .then(result => {


      res.redirect('/');
    })
    .catch(err => console.log(err));
}

}
exports.getpostinput=(req,res,next)=>{

    Product.findAll()
    .then(products => {
      
      // console.log(products)
      res.json(products)
      

      

   

    })
    .catch(err => console.log(err));

}

exports.postDeleteProduct =(req, res, next) => {
    const prodId = req.params.productId;

    Product.findByPk(prodId).then(user => {
        return user.destroy();
   }).then(result => {
        res.redirect("/")
   }).catch(err => console.log(err));
  };
