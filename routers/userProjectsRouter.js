const router = require('express').Router()

let projects = require('../models/userprojects.model')

router.route("/add/:id").post((req, res) => {
    const userid = req.params.id
    const name = req.body.name
    const link = req.body.link
    const description = req.body.description

    const newdata = new projects({ userid, name, link, description })
    newdata.save()
        .then(() => res.status(200).json("Project data added successfully"))
        .catch((err) => res.status(400).json("error" + err))
})

router.route("/:id").get((req, res) => {
    projects.find({ userid: req.params.id })
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json("error" + err))
})


router.route("/update/:id").post((req, res) => {
    projects.findById(req.params.id)
        .then((data) => {
            data.userid = req.body.userid
            data.name = req.body.name
            data.link = req.body.link
            data.description = req.body.description

            data.save()
                .then(() => res.status(200).json("Project data updated successfully"))
                .catch((err) => res.status(400).json("error" + err))
        })
        .catch((err) => res.status(400).json("error" + err))
})
router.route("/delete/:id").delete((req,res)=>{
    projects.findByIdAndDelete(req.params.id)
    .then(res=>res.json("deleted successfully"))
    .catch(err=>res.status(400).json("failed to delete"))
    
})

module.exports = router