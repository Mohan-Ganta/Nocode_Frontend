const mongoose = require('mongoose')
const schema = mongoose.Schema
const userProjectSchema  = new schema(
    {
        userid : {type:String,required:true},
        name : {type:String,required:true},
        link : {type:String,required:false},
        description:{type:String,required:true}
    },{
        timestamps : true,
    }
)

const Projects = mongoose.model('userprojects',userProjectSchema)
module.exports = Projects