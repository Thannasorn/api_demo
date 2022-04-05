const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name:{
        type: String
    },
    username:{
        type: String
    },
    email:{
        type: String
    },
    address:{
        type: Object
    },
    phone:{
        type: String
    },
    website:{
        type: String
    },
    company:{
        type: Object
    }
}, {
    collection:'member'
})

module.exports =mongoose.model("Member", memberSchema);