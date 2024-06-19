const mongoose = require('mongoose')
const schema = mongoose.Schema
const userSkillSchema  = new schema(
    {
        userid : {type:String,required:true},
        skill : {type:String,required:true}, 
    },{
        timestamps : true,
    }
)

const Skills = mongoose.model('userskills',userSkillSchema)
module.exports = Skills