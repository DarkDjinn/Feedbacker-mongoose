import React from 'react';
import _ from 'lodash';
import SurveyField from './SurveyField';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

import formFields from './formFields';

class SurveyForm extends React.Component {
	renderFields() {
		return _.map(formFields, ({ name, label }) => {
			return (
				<Field
					key={name}
					label={label}
					type="text"
					name={name}
					component={SurveyField}
				/>
			);
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link className="red btn-flat left white-text" to="/surveys">
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next <i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');
	errors.sender = validateEmails(values.sender || '');

	_.forEach(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value!';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
