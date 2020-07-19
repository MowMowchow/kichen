import React, { Component } from 'react';
import './cart-item.css';
import HttpServiceClass from '..//..//services/http-services';

let HttpService = new HttpServiceClass();


class CartItem extends Component {
  constructor(props) {
    super(props);

    this.do1 = this.do1.bind(this);
  }

  do1 = function(param, callback1){
    HttpService.removeFromCart(param)
    .then((temp2) => callback1());
  }


  handleClick = (event) => {
    var temp = {itemId: this.props.item._id, cartId: this.props.cartId};
    this.do1(temp, this.props.refresher);
  }


  render() {
		return (
			<div className="cart-item item-btn cart-page">
				<div>
					<div className="row">
						<div className="col-1">
							<button type="button" class="close" aria-label="Close" onClick={this.handleClick}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="col-7 item-btn-text">
							<h3> {this.props.item.title}</h3>
							<h5>{this.props.item.ready_time}</h5>
							<h5>{this.props.item.price}</h5>
						</div>
						<div className="col-4 item-btn-image" />
					</div>
				</div>
			</div>
		);
	}
}

export default CartItem;
