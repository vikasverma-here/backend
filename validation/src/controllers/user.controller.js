const validationModel = require("../models/user.model")

const registerController = async (req,res) => {
       console.log(req.body)

       const {name,email,age,phone}= req.body
     const user = await validationModel.create({
        name,
        email,
        age,
        phone
     })
       
     res.send(user)
}

module.exports=registerController