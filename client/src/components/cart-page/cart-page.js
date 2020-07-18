import React, { Component } from 'react';
import HttpServiceClass from '..//..//services/http-services';

let HttpService = new HttpServiceClass();

class CartPage extends Component {
	render() {
		return (
			<div class="row cart-page">
				<div class="col-8 items-view ">  
					<h1>Your Cart</h1>
					<div class="cart">
					</div>
				</div>

				<div class="col-4 info-view" />
			</div>
		);
	}
}

export default CartPage;
