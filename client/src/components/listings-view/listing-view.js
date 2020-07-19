import React, { Component } from 'react';
import './listing-view.css';
import ItemModal from '..//item-modal/item-modal.js';
import HttpServiceClass from '..//..//services/http-services';

let HttpService = new HttpServiceClass();
class ListingView extends Component {
  constructor(props){
    super(props);
    this.state = {
      incart: false,
      cart: [],
      showModal: 'none',
      canrender: false,
      item_id: '',
      cart_id: '',
    };

    // binds
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }


  loadData = () => {
    HttpService.getIp().then((ip) => (HttpService.getCart(ip.ip)))
    .then((findata) => {
        this.setState({cart: findata[0].items})
        this.setState({cart_id: findata[0]._id})
        console.log(findata[0].items);
    })
    .then((wee) => {
      var itemid = this.props.item._id;
      this.setState({item_id: itemid});
      console.log('curr item:', this.props.item);
      for (let i = 0; i < this.state.cart.length; i++){
        if (itemid === this.state.cart[i]._id){
          this.setState({incart: true});
          console.log('found item');
        } else {
          this.setState({incart: false});
        }
      }
    })
    .then((aaaa) => this.setState({canrender: true}));
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
									<p className="name">John Smith</p>
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
            this.hideModal(this.props.item.title);
            console.log("AAAAAAAAAAAAAAAAAAAAAA");}}
          item={this.props.item}
          incart={this.state.incart}
          cartId = {this.state.cart_id}
          itemId = {this.state.item_id}
          /> 
        
			</div>
		);
  } else {
    return (
			<div>
				<div className="row listing-btn col-12" onClick={() => this.getModal(this.props.item.title)}>
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
						<div className="col-2 time-box">
							<div className="time-text">
								<h4>{this.props.items.ready_time}</h4>
							</div>
						</div>

						<div className="col-2 listing-btn-image-bigscreen">

						</div>

					</div>
				</div>
			</div>
			</div>
		);
  }
}
}
export default ListingView;
