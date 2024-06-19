const router = require('express').Router()

let certificate = require('../models/usercertificates.model')

router.route("/add/:id").post((req,res)=>{
    const userid = req.params.id
    const name = req.body.name
    const link = req.body.link
    const description = req.body.description

    const newdata = new certificate({userid,name,link,description})
    newdata.save()
    .then(()=>res.status(200).json("certificate data added successfully"))
    .catch((err)=>res.status(400).json("error"+err))
})

router.route("/:id").get((req,res)=>{
    certificate.find({userid:req.params.id})
    .then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(400).json("error"+err))
})

router.route("/update/:id").post((req,res)=>{
    certificate.findById(req.params.id)
    .then((data)=>{
        data.userid  = req.body.userid
        data.name  = req.body.name
        data.link  =  req.body.link
        data.description  = req.body.description
    
        data.save()
        .then(()=>res.status(200).json("certificate data updated successfully"))
        .catch((err)=>res.status(400).json("error"+err))
    })
    .catch((err)=>res.status(400).json("error"+err))
})
router.route("/delete/:id").delete((req,res)=>{
    certificate.findByIdAndDelete(req.params.id)
    .then(res=>res.json("deleted successfully"))
    .catch(err=>res.status(400).json("failed to delete"))
    
})

module.exports = router