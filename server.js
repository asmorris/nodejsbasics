var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var jwt = require('jsonwebtoken')

// Controllers
var dataController = require('./server/controllers/data-controller')
var authenticateController = require('./server/controllers/authenticate-controller')
process.env.SECRET_KEY = 'owrhto42-9g0978ashjo'

var mongoose = require('mongoose')

var secureRoutes = express.Router()



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/secure-api', secureRoutes)

var config = require('./server/config/config.js')
config.setConfig


app.get('/api/authenticate', authenticateController.authenticate)
app.get('/api/getData', dataController.getData)

// Validation middleware

secureRoutes.use((req, res, next) => {
	var token = req.body.token || req.headers['token']

	if (token) {
		jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
			if (err) {
				res
					.status(500)
					.send("Invalid token")
			} else {
				next()
			}
		})
	} else {
		res
			.send('Please send a token')
	}
})
secureRoutes.post('/postData', dataController.postData)

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is goin!")
})
