import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li style={{ margin: '0 5px 0 15px' }} key="2">
						Credits: {this.props.auth.credits}
					</li>,
					<li key="3">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper #42a5f5 blue lighten-1">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo">
						Feedbacker
					</Link>
					<ul id="nav-mobile" className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return {
		auth
	};
};

export default connect(mapStateToProps)(Header);
