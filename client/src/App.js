import React, {Component} from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Listings from './components/listings/listings';
import Home from './components/home/home';
import NewListing from './components/new-listing/new-listing';
import CartPage from './components/cart-page/cart-page';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  
    render() {
      return (
        <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/listings" exact component={Listings} />
            <Route path="/newlisting" exact component={NewListing} />
            <Route path="/cart" exact component={CartPage} />
          </Switch>
        </div>
        </Router>
      );
    }
}


export default App;
