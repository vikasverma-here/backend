const express = require("express")
const detailsModel = require("../models/details.model")
const{createuser,alluser,findOneUser,userByid,deltingUserByid,update}  =require("../controllers/details.controller")
const router = express.Router()


router.post("/create",createuser)
router.get("/allusers",alluser)
router.get("/oneuser",findOneUser)
router.get("/oneuserByid",userByid)
router.delete("/deleteByid",deltingUserByid)
router.patch("/updateUser",update)
  module.exports=router