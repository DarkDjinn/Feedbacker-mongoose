// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
	if (emails[emails.length - 1] === ',') {
		emails = emails.slice(0, -1);
	}

	if (emails[emails.length - 1] === ' ') {
		emails = emails.slice(0, -2);
	}

	const invalidEmails = emails
		.split(',')
		.map(email => email.trim())
		.filter(email => re.test(email) === false);

	if (invalidEmails.length === 1) {
		return `This email is invalid: ${invalidEmails}`;
	} else if (invalidEmails.length > 1) {
		return `These emails are invalid: ${invalidEmails}`;
	}

	return;
};
