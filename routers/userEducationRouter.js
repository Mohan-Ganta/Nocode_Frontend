const router = require('express').Router()

let education = require('../models/usereducation.model')

router.route("/add/:id").post((req,res)=>{
        const userid  = req.params.id
        const school  = req.body.school
        const degree  =  req.body.degree
        const city  = req.body.city
        const startDate  = req.body.startDate
        const endDate  = req.body.endDate
        const description =req.body.description

        const newEducationData = new education({userid,school,degree,city,startDate,endDate,description})
        newEducationData.save()
        .then(()=>res.status(200).json({"msg":"Education data added successfully"}))
        .catch((err)=>res.status(400).json("error"+err))
})

router.route("/:id").get((req,res)=>{
    education.find({userid:req.params.id})
    .then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(400).json("error"+err))
})

router.route("/update/:id").post((req,res)=>{
    education.findById(req.params.id)
    .then((data)=>{
        data.userid  = req.body.userid
        data.school  = req.body.school
        data.degree  =  req.body.degree
        data.city  = req.body.city
        data.startDate  = req.body.startDate
        data.endDate  = req.body.endDate
        data.description =req.body.description

        data.save()
        .then(()=>res.status(200).json("Education data updated successfully"))
        .catch((err)=>res.status(400).json("error"+err))
    })
    .catch((err)=>res.status(400).json("error"+err))
})
router.route("/delete/:id").delete((req,res)=>{
    education.findByIdAndDelete(req.params.id)
    .then(res=>res.json("deleted successfully"))
    .catch(err=>res.status(400).json("failed to delete"))
    
})
module.exports = router
