import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends React.Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => (
			<div key={survey._id} className="card blue-grey darken-1">
				<div className="card-content white-text">
					<span className="card-title">{survey.title}</span>
					<p>{survey.body}</p>
					<p className="right">
						Sent On: {new Date(survey.dateSent).toLocaleDateString()}
					</p>
				</div>
				<div className="card-action">
					{/* eslint-disable-next-line */}
					<a>Yes: {survey.yes}</a>
					{/* eslint-disable-next-line */}
					<a>No: {survey.no}</a>
				</div>
			</div>
		));
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		surveys: state.surveys
	};
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
