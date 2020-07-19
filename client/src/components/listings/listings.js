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
      <div className="container-fluid h-100 listing-page">


        <div className="row">
        <div className="col-lg-2 col-xlg-1 left-col">
        <h1>Listings</h1>
        </div>
       
        <div className="col-md-10 col-lg-10 col-xlg-11 listing-block">
        <h1 class="name2" >Listings</h1>
          {this.itemList()}
          </div>
          </div>
          
      </div>
    );
  }
}



export default Listings;