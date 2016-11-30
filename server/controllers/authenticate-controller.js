var jwt = require('jsonwebtoken')

module.exports.authenticate = (req, res) => {
	var user = {
		username: 'test',
		email: 'test@test.com'
	}
	var token = jwt.sign(user, process.env.SECRET_KEY, {
		expiresIn: 4000,

	})
	res
		.json({ success: true, token: token})
}
