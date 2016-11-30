var mongoose = require('mongoose')

var personSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,

})

module.exports = mongoose.model("Person", personSchema, 'persons')
