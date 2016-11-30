var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// Controllers
var dataController = require('./server/controllers/data-controller')
var mongoose = require('mongoose')

var dummyData = []

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var config = require('./server/config/config.js')
config.setConfig



app.get('/api/getData', dataController.getData)

app.post('/api/postData', dataController.postData)

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is goin!")
})
