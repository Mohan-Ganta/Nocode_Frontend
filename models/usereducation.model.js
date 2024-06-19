const mongoose = require('mongoose')
const schema = mongoose.Schema
const UserEducationSchema  = new schema(
    {
        userid : {type:String,required:true},
        school : {type:String,required:true},
        degree : {type:String,required:false},
        city : {type:String,required:true},
        startDate : {type:String,required:true},
        endDate : {type:String,required:true},
        description:{type:String,required:true}
    },{
        timestamps : true,
    }
)

const UserEducation = mongoose.model('userEducationDetails',UserEducationSchema)
module.exports = UserEducation