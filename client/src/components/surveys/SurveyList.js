import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import axios from 'axios';

class SurveyList extends React.Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	handleClick = async id => {
		await axios.delete(`/api/delete/${id}`, id);

		this.props.fetchSurveys();
	};

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => (
			<div key={survey._id} className="card #eceff1 blue-grey lighten-5">
				<div className="card-content black-text">
					<span className="card-title">{survey.title}</span>
					<p>{survey.body}</p>
					<p className="right">
						Sent On: {new Date(survey.dateSent).toLocaleDateString()}
					</p>
				</div>
				<div className="card-action">
					{/* eslint-disable-next-line */}
					<a
						className="waves-effect waves-red red-text btn-flat right"
						onClick={() => this.handleClick(survey._id)}>
						Delete
					</a>
					{/* eslint-disable-next-line */}
					<a className="green-text">Yes: {survey.yes}</a>
					{/* eslint-disable-next-line */}
					<a className="red-text">No: {survey.no}</a>
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
