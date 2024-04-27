const mongoose = require('mongoose')

const viewersSchema =   mongoose.Schema({
    device:{type: String, required: true},
    devicedetailinfo:{type:Object,required:true},
})



exports.viewersmodel = mongoose.model('viewers',viewersSchema)

