import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './DropDown.css';
import React from 'react';
import { connect } from 'react-redux';
import { sortSurveysBy } from '../../actions';

class DropDown extends React.Component {
	componentDidMount() {
		M.AutoInit();
	}

	renderSort = async e => {
		await this.props.sortSurveysBy(e.target.value);
	};

	render() {
		return (
			<div>
				<div className="input-field col s12">
					<select onChange={e => this.renderSort(e)} defaultValue="">
						<option value="">Sort By</option>
						<option value="ascending">Creation Date Ascending</option>
						<option value="descending">Creation Date Descending</option>
						<option value="a-z">A-Z</option>
					</select>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		sortBy: state.sortBy
	};
};

export default connect(mapStateToProps, { sortSurveysBy })(DropDown);
