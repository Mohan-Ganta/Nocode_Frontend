const mongoose = require('mongoose')
const schema = mongoose.Schema
const userCertificatesSchema  = new schema(
    {
        userid : {type:String,required:true},
        name : {type:String,required:true},
        link : {type:String,required:false},
        description:{type:String,required:true}
    },{
        timestamps : true,
    }
)

const Certificates = mongoose.model('usercertificates',userCertificatesSchema)
module.exports = Certificates