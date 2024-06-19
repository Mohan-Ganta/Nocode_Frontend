const router = require('express').Router()

let aboutUser = require('../models/aboutuser.model')

router.route("/:id").get((req,res)=>{
    aboutUser.findOne({userid:req.params.id})
    .then((userdata)=>{res.status(200).json(userdata)})
    .catch((err)=>res.status(400).json("error"+err))
})

router.route("/add/:id").post((req,res)=>{
        const userid = req.params.id
        const firstName = req.body.firstName
        const middleName = req.body.middleName
        const lastName = req.body.lastName
        const imageurl = req.body.imageUrl
        const designation = req.body.designation
        const address = req.body.address
        const email = req.body.email
        const phoneNo = req.body.phoneNo
        const description  = req.body.description

        const newData = new aboutUser({userid,firstName,middleName,lastName,imageurl,designation,address,email,phoneNo,description})
        newData.save()
        .then(()=>res.status(200).json("About data added successfully"))
        .catch((err)=>res.status(400).json("error"+err))

})
router.route("/update/:id").post((req,res)=>{
    aboutUser.findById(req.params.id)
    .then((data)=>{
        data.userid = req.body.userid
        data.firstName = req.body.firstName
        data.middleName = req.body.middleName
        data.lastName = req.body.lastName
        data.imageurl = req.body.imageurl
        data.designation = req.body.designation
        data.address = req.body.address
        data.email = req.body.email
        data.phoneNo = req.body.phoneNo
        data.description  = req.body.description

        data.save()
        .then(()=>res.status(200).json("About data updated successfully"))
        .catch((err)=>res.status(400).json("error"+err))
    })
    .catch((err)=>res.status(400).json("error"+err))
})

module.exports = router