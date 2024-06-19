const mongoose = require('mongoose')
const schema = mongoose.Schema
const userExperienceSchema  = new schema(
    {
        userid : {type:String,required:true},
        title : {type:String,required:true},
        company : {type:String,required:true},
        city : {type:String,required:true},
        startDate : {type:String,required:true},
        endDate : {type:String,required:true},
        description:{type:String,required:true}
    },{
        timestamps : true,
    }
)

const UserExperience = mongoose.model('userExperience',userExperienceSchema)
module.exports = UserExperience