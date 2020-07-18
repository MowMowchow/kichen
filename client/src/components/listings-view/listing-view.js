import React, { Component } from 'react';
import './listing-view.css';
import HttpServiceClass from '..//..//services/http-services';

let HttpService = new HttpServiceClass();
class ListingView extends Component {

	render() {

    return (
			<div>
				<div className="listing-btn">
					<div className="listing-btn-image" />
					<div className="listing-btn-text">
						<div className="row">
							<div className="col-8 main-info">
								<h5 className="title">{this.props.item.title}</h5>
								<p>
									{this.props.item.location} • ${this.props.item.price} per serving
								</p>
								<div className="user-info">
									<div className="profile-pic" />
									<p className="name">John Doe</p>
								</div>
							</div>
							<div className="col-4 time-box">
								<div className="time-text">
									<h4>Jul. 11th</h4>
									<h4>9:00pm</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
  }
}
export default ListingView;
