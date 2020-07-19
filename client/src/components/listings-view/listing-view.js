import React, { Component } from 'react';
import './listing-view.css';
import ItemModal from '..//item-modal/item-modal.js';
import HttpServiceClass from '..//..//services/http-services';

let HttpService = new HttpServiceClass();
class ListingView extends Component {
  constructor(props){
    super(props);

    // binds
    this.loadData = this.loadData.bind(this);
  }

	getModal = (value) => {
    this.setState({ showModal: value });
	};

	hideModal = (value) => {
    this.setState({ showModal: 0 });
    this.loadData();
	};

	render() {
    if (this.state.canrender){
		return (
			<div>
				<div className="listing-btn" onClick={() => this.getModal(this.props.item.title)}>
					<div className="listing-btn-image" />
					<div className="listing-btn-text">
						<div className="row">

							<div className="col-6 main-info">
							
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

							<div className="col-2 listing-btn-image-bigscreen">

							</div>

						</div>
					</div>
				</div>

          <ItemModal
					show={this.state.showModal === this.props.item.title}
          onHide={() => {
            this.hideModal(this.props.item.title);}}
          /> 
        
			</div>
		);
  }
}
}
export default ListingView;