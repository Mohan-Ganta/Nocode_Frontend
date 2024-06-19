const router = require('express').Router()

let skills = require('../models/userskills.model')

router.route("/add/:id").post((req,res)=>{
    const userid = req.params.id
    const skill = req.body.skill

    const newdata = new skills({userid,skill})
    newdata.save()
    .then(()=>res.status(200).json("skills data added successfully"))
    .catch((err)=>res.status(400).json("error"+err))
})

router.route("/:id").get((req,res)=>{
    skills.find({userid : req.params.id})
    .then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(400).json("error"+err))
})
router.route("/update/:id").post((req,res)=>{
    skills.findById(req.params.id)
    .then((data)=>{
        data.userid  = req.body.userid
        data.skill  = req.body.skill
    
        data.save()
        .then(()=>res.status(200).json("skills data updated successfully"))
        .catch((err)=>res.status(400).json("error"+err))
    })
    .catch((err)=>res.status(400).json("error"+err))
})

router.route("/delete/:id").delete((req,res)=>{
    skills.findByIdAndDelete(req.params.id)
    .then(res=>res.json("deleted successfully"))
    .catch(err=>res.status(400).json("failed to delete"))
    
})
module.exports = router