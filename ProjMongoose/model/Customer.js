var mongoose = require('mongoose')

var CustomerSchema = new mongoose.Schema({
   Name: String, 
   Email:String,
   Address: String,
   Phone: String    
})

module.exports = mongoose.model('customer',CustomerSchema)