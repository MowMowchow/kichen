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
		console.log("AWDGHIAWUDHWUADHIAUWDHUIWA", this.state.rand);
	}


    loadData = () => {
        HttpService.getIp().then((ip) => (HttpService.getCart(ip.ip)))
        .then((findata) => {
            this.setState({cart: findata[0].items});
            this.setState({cartId: findata[0]._id});
            console.log(findata[0].items);
        });
      }


	cartList = () => {
        console.log(this.state.cart);
		const list = this.state.cart.map((item) => (
			<CartItem key={item._id} item={item} cartId={this.state.cartId} refresher={this.refresher}/>
		));
		return list;
	};

	render() {
		return (
			<div class="row cart-page">
				<div class="col-12 col-sm-12 col-m-8 col-lg-8 col-xlg-8 items-view ">  
					<h2>Your Cart</h2>
					<div class="cart">
					{this.cartList()}
					</div>
				</div>

				<div class="col-4 info-view" />
			</div>
		);
	}
}

export default CartPage;
