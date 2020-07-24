import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component {
	render() {
		return (
			<StripeCheckout
				amount={500}
				token={token => {
					this.props.handleToken(token);
				}}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
				name="Feedbacker"
				description="Pay $5 for 5 E-Mail credits">
				<button className="btn #f06292 pink lighten-2">Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);
