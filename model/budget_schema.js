const mongoose = require("mongoose")
// validate it is number
// validate if the value has been passed 
// find by id --> document then id is found else --> you may use this id
const budgetSchema = new mongoose.Schema({
    id: {
   type: Number,
   required: true,
   unique: true,
},
title: {
    type: String,
    trim: true,
    required: true,
    uppercase: true
},

budget: {
    type: Number,
    trim: true,
    required: true,
    uppercase: true
},
color: {
    type: String,
    trim: true,
    required: true,
    uppercase: true
}

}, { collection: 'budget'}) 

module.exports = mongoose.model('budget', budgetSchema)