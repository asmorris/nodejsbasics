var Person = require('../models/person.js')

module.exports.getData = (req, res) => {
	Person
		.find()
		.exec((err, people) => {
			if (err) {
				res
					.status(500)
					.send("Couldn't run the query")
					return
			}

			res
				.json({data: people})
		})
}

module.exports.postData = (req, res) => {
	var person = new Person(req.body)

	person.save((err) => {
		if (err) {
			res
				.status(500)
				.send("Could not save the user at this time")
				return
		}

		res
			.status(200)
			.send("Your user was saved successfully!")
	})

}
