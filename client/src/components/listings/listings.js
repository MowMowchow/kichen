import React, {Component} from 'react';
import './listings.css';
import HttpServiceClass from '..//..//services/http-services';
import ListingView from '..//listings-view/listing-view.js';


let HttpService = new HttpServiceClass();


 class Listings extends Component {
  constructor(props){
    super(props);

    this.state = {items:[]}; // state is an object
    //binds
    this.loadData = this.loadData.bind(this);
    this.itemList = this.itemList.bind(this);
    this.loadData();
  }


  loadData = () => {
    var self = this;
    HttpService.getItems().then(data => {
      self.setState({items: data})
    }, err => {});
  }


  itemList = () => {
    const list = this.state.items.map((item) => 
    <ListingView key={item._id} item={item} />
    )
    return(list);
  }


  render() {
    return (
      <div>
        <h1>Listings</h1>
        {this.itemList()}
      </div>
    );
  }
}



export default Listings;