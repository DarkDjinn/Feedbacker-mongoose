const mongoogse = require('mongoose');
const { Schema } = mongoogse;

const userSchema = new Schema({
	googleId: String,
	credits: {
		type: Number,
		default: 0
	}
});

mongoogse.model('users', userSchema);
