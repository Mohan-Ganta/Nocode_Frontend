const router = require('express').Router()

let experience = require("../models/userexperience.model")

router.route("/add/:id").post((req, res) => {
    const userid = req.params.id
    const title = req.body.title
    const company = req.body.company
    const city = req.body.city
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const description = req.body.description

    const newExperienceData = new experience({ userid, title, company, city, startDate, endDate, description })
    newExperienceData.save()
        .then(() => res.status(200).json("Experience data added successfully"))
        .catch((err) => res.status(400).json("error" + err))
})

router.route("/:id").get((req,res)=>{
    experience.find({userid:req.params.id})
    .then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(400).json("error"+err))
})

router.route("/update/:id").post((req,res)=>{
    experience.findById(req.params.id)
    .then((data)=>{
        data.userid  = req.body.userid
        data.title  = req.body.school
        data.company  =  req.body.degree
        data.city  = req.body.city
        data.startDate  = req.body.startDate
        data.endDate  = req.body.endDate
        data.description =req.body.description

        data.save()
        .then(()=>res.status(200).json("Experience data updated successfully"))
        .catch((err)=>res.status(400).json("error"+err))
    })
    .catch((err)=>res.status(400).json("error"+err))
})
router.route("/delete/:id").delete((req,res)=>{
    experience.findByIdAndDelete(req.params.id)
    .then(res=>res.json("deleted successfully"))
    .catch(err=>res.status(400).json("failed to delete"))
    
})
module.exports = router