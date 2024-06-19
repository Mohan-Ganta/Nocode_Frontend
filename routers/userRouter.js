const router = require("express").Router()

let user = require("../models/user.model")

router.route("/").get((req,res)=>{
    user.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json("Error"+err))
})

router.route("/login/:email/:password").get((req,res)=>{
    const email = req.params.email
    const password = req.params.password

    user.findOne({email : email})
    .then(data=>{
        console.log(data)
        if(data.password === password)
            {
                res.json(data)
            }
            else{
                res.status(400).json("Incorrect Password")
            }
            

    })
    .catch((err)=>res.status(400).json("error"))

})
router.route("/add").post((req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const hasProfile = false
    const newUser = new user({username,email,password,hasProfile})
    newUser.save()
    .then(()=>res.status(200).json({"message":"user Added Successfully"}))
    .catch((err)=>res.status(400).json("Error"+ err))
})

router.route("/:id").get((req,res)=>{
    user.findById(req.params.id)
    .then((userdata)=>res.status(200).json(userdata))
    .catch((err)=>res.status(400).json("Error"+ err))
})

router.route("/:id").delete((req,res)=>{
    user.findByIdAndDelete()
    .then(()=>res.status(200).json({"message":"user Deleted Successfully"}))
    .catch((err)=>res.status(400).json("Error"+ err))
})

router.route("/update/:id").post((req,res)=>{
    
    user.findById(req.params.id)
    .then((userdata)=>{
        userdata.username = req.body.username
        userdata.email = req.body.email
        userdata.password = req.body.password
        userdata.hasProfile = true
        userdata.save()
        .then(()=>res.status(200).json("user data updated successfully"))
        .catch((err)=>res.status(400).json("error"+err))
    })
    .catch((err)=>res.status(400).json("error"+err))

})

module.exports = router