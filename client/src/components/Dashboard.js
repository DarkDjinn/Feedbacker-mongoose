import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import Modal from './Modal';

const Dashboard = () => {
	return (
		<div>
			<Modal />
			<SurveyList />
			<div className="fixed-action-btn">
				<Link
					className="btn-floating btn-large #0d47a1 blue darken-4"
					to="/surveys/new">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
