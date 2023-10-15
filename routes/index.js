const path = require('path');

const express = require('express');

const controller=require("../controller/input")


const router = express.Router();

router.get("/",controller.getinput)
router.post("/add-user",controller.postinput)
router.get("/add-user",controller.getpostinput)
router.post("/deleteuser/:productId",controller.postDeleteProduct)


module.exports=router;