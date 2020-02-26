const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
	app.get('/api/surveys', requireLogin, requireCredits, (req, res) => {
		const { title, subject, body, recipients } = req.body;
		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map(email => ({
				email: email.trim()
			})),
			_user: req.user.id,
			dateSent: Date.now()
		});

		// Mailer(survey, surveyTemplate(survey));
		const mailer = new Mailer(survey, surveyTemplate(survey));
		mailer.send();
		// req.user.credits -= 1;
		// const user = await req.user.save();
		// res.send(user);
	});

	app.post('/api/surveys/webhooks', (req, res) => {});

	app.post('/api/surveys', (req, res) => {});
};
