const detailsModel = require("../models/details.model")

const createuser= async (req,res)=>{
    const {userName,email,age}=req.body
      console.log(req.body)
    await  detailsModel.create({
          userName,
          email,
          age
      })
      
      res.send("data added succesfully")
  }
 

  const alluser=async(req,res)=>{
    const users = await detailsModel.find()
    res.send(users)
  }

  const findOneUser = async(req,res)=>{
    const{email} = req.body
    const userone =await detailsModel.findOne({email:email})
    res.send(userone)
  }


  const userByid=async (req,res)=>{
    const {_id}=req.body
     const oneuserById = await detailsModel.findById({_id})
     res.send(oneuserById)
  }

  const deltingUserByid=async(req,res)=>{
    const {_id}=req.body
    const deleting = await detailsModel.findByIdAndDelete(_id)
    console.log("collection deleted succesfully")
    res.send(deleting)
  }

  const update=async(req,res)=>{
    const {_id}=req.body
    console.log(_id)
    const updatedUser = await detailsModel.findByIdAndUpdate(_id,req.body.userName)
    res.send(updatedUser)
  }

  module.exports={createuser,alluser,findOneUser,userByid,deltingUserByid,update}