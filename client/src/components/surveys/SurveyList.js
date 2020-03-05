import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, getClickedId } from '../../actions';

class SurveyList extends React.Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	handleClick = id => {
		this.props.getClickedId(id);
	};

	renderSurveys() {
		return this.props.surveys.map(survey => (
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
						className="waves-effect waves-red red-text btn-flat right modal-trigger"
						data-target="modal1"
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
		surveys: state.surveys,
		id: state.id
	};
};

export default connect(mapStateToProps, { fetchSurveys, getClickedId })(
	SurveyList
);
