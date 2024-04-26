const mongoose = require('mongoose')

const viewersSchema =   mongoose.Schema({
    device:{type: String, required: true}
})



exports.viewersmodel = mongoose.model('viewrs',viewersSchema)



