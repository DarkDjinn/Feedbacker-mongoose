import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { getClickedId, fetchSurveys } from '../actions';
import axios from 'axios';

class Modal extends Component {
	componentDidMount() {
		const options = {
			// onOpenStart: () => {
			// 	console.log(this.props);
			// },
			// // onOpenEnd: () => {
			// // 	console.log('Open End');
			// // },
			// // onCloseStart: () => {
			// // 	console.log('Close Start');
			// // },
			// // onCloseEnd: () => {
			// // 	console.log('Close End');
			// // },
			inDuration: 250,
			outDuration: 250,
			opacity: 0.5,
			dismissible: false,
			startingTop: '4%',
			endingTop: '10%'
		};
		M.Modal.init(this.Modal, options);
	}

	handleSurveyDelete = async () => {
		await axios.delete(`/api/delete/${this.props.id}`);
		this.props.fetchSurveys();
	};

	render() {
		return (
			<div>
				<div
					ref={Modal => {
						this.Modal = Modal;
					}}
					id="modal1"
					className="modal">
					<div className="modal-content">
						<h4>Are you sure you want to delete this survey?</h4>
						<h5>This action cannot be undone!</h5>
					</div>
					<div className="modal-footer">
						{/* eslint-disable-next-line */}
						<a className="modal-close waves-effect waves-red red-text btn-flat">
							Cancel
						</a>
						{/* eslint-disable-next-line */}
						<a
							onClick={this.handleSurveyDelete}
							className="modal-close waves-effect waves-green green-text btn-flat">
							Delete
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		id: state.id
	};
};

export default connect(mapStateToProps, { getClickedId, fetchSurveys })(Modal);
