import React, {Component} from 'react';
import './listings.css';
import HttpServiceClass from '..//..//services/http-services';


let HttpService = new HttpServiceClass();

 class Listings extends Component {

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