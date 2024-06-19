const mongoose = require('mongoose')
const schema = mongoose.Schema
const aboutUserSchema  = new schema(
    {
        userid : {type:String,required:true},
        firstName : {type:String,required:true},
        middleName : {type:String,required:false},
        lastName : {type:String,required:true},
        imageurl : {type:String,required:true},
        designation : {type:String,required:true},
        address : {type:String,required:true},
        email : {type:String,required:true},
        phoneNo : {type:String,required:true},
        description:{type:String,required:true}
    },{
        timestamps : true,
    }
)

const AboutUser = mongoose.model('AboutUser',aboutUserSchema)
module.exports = AboutUser