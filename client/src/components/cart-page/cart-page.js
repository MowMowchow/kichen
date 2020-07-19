import React, { Component } from 'react';
import HttpServiceClass from '..//..//services/http-services';
import '..//cart-item/cart-item.css';
import CartItem from '..//cart-item/cart-item.js';

let HttpService = new HttpServiceClass();

class CartPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cart: [],
			cartId: '',
			rand: Math.random(),
			checkout_total: 0
		} // state is an object

		// //binds
		this.loadData = this.loadData.bind(this);
		this.cartList = this.cartList.bind(this);
		this.refresher = this.refresher.bind(this);
		this.loadData();
	}
	
	refresher = () => {
		console.log('randnum: ', this.state.rand);
		this.loadData();
	}


    loadData = () => {
        HttpService.getIp().then((ip) => (HttpService.getCart(ip.ip)))
        .then((findata) => {
            this.setState({cart: findata[0].items});
            this.setState({cartId: findata[0]._id});
            console.log(findata[0].items);
		}).then((temp) => {
		var temp_total = 0;
		for (let i = 0; i < this.state.cart.length; i++){
			temp_total += parseFloat(this.state.cart[i].price);
		}
		this.setState({checkout_total: temp_total});
      });
	};


	cartList = () => {
        console.log(this.state.cart);
		const list = this.state.cart.map((item) => (
			<CartItem key={item._id} item={item} cartId={this.state.cartId} refresher={this.refresher}/>
		));
		return list;
	};

	render() {
		return (
			<div className="container-fluid" id="cart-page-div">
			<div className="row cart-page">
				<div className="col-sm-12 col-md-8 items-view ">  
					<h2 className="cart-header">Your Cart</h2>
					<div class="cart">
					{this.cartList()}
					</div>
				</div>

				<div className="col-sm-12 col-md-4 info-view">
					<h2 className="checkout-header">Checkout Info</h2>
					<div className="row">
						<div className="col-sm-6">
							<h3 className="checkout-info">Subtotal</h3>
							<h3 className="checkout-info">Tax (HST)</h3>
							<h3 className="checkout-info">Your Total</h3>
							
						</div>
						<div className="col-sm-6">
							<h3 className="checkout-info">${this.state.checkout_total}</h3>
							<h3 className="checkout-info">${((this.state.checkout_total)*.13).toFixed(2)}</h3>
							<h3 className="checkout-info">${((this.state.checkout_total)*1.13).toFixed(2)}</h3>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12 checkout-btn-col">
							<button className="checkout-button">Checkout</button>
						</div>
					</div>


				</div>
			</div>
		</div>
		);
	}
}

export default CartPage;
