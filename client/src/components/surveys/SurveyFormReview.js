import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFromReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = () => {
		return _.map(formFields, ({ name, label }) => {
			return (
				<div key={name}>
					<label>{label}</label>
					<div>{formValues[name]}</div>
				</div>
			);
		});
	};

	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields()}
			<button onClick={onCancel} className="red btn-flat left white-text">
				Back
			</button>
			<button
				onClick={() => submitSurvey(formValues, history)}
				className="teal btn-flat right white-text">
				Send Survey<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		formValues: state.form.surveyForm.values
	};
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFromReview));
