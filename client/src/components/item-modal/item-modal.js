import React, { Component } from 'react';
import './item-modal.css';
import HttpServiceClass from '..//..//services/http-services';
//import PropTypes from 'prop-types';

let HttpService = new HttpServiceClass();


class ItemModal extends Component {
  constructor(props){
    super(props);
  }


  handleClick = (event) => {
    var temp = {itemId: this.props.itemId, cartId: this.props.cartId};
  }

	render() {
		if (!this.props.show) {
			return null;
		}

		return (
			<React.Fragment>
				{this.props.show && (
					<div className="modal-overlay" onClick={this.props.onHide}>
						<div className="modal-lg " id="exampleModal">
							<div className="modal-dialog  mw-100 modal-lg" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<button
											onClick={this.props.onHide}
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">×</span>
										</button>
									</div>
									<div className="modal-body item-page">
										<div className="">
											<div className="container-fluid">
												<div className="row">
													<div className="col-6 image" />
													<div className="col-6 info">
														<h1>{this.props.item.title}</h1>

														<div className="modal-user-info">
															<div className="modal-profile-pic" />
															<h2 className="modal-name">John Doe</h2>
														</div>
														<div className="product-info">
															<h2>Price | 0.5km away</h2>
															<h2>July 12th, 12:00pm </h2>
														</div>
													</div>
												</div>
												<div className="row bottom-row">
													<div className="col-6 desc">
														<h1>Description</h1>
														<p>
															{' '}
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod tempor incididunt ut labore et dolore magna
															aliqua. Ut enim ad minim veniam, quis nostrud exercitation
															ullamco laboris nisi ut aliquip ex ea commodo consequat.
														</p>
													</div>
													<div className="col-6 ingredients">
														<h1>Ingredients</h1>
														<p>
															{' '}
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod tempor incididunt ut labore et dolore magna
															aliqua. Ut enim ad minim veniam, quis nostrud exercitation
															ullamco laboris nisi ut aliquip ex ea commodo consequat.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="modal-footer">
                    <button className="addcart-btn" onClick={this.handleClick}>    
                    </button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default ItemModal;
