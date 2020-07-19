import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (

    <nav class="navbar navbar-expand-md ">
    <Link to= '/'>
                <h3 className="LOGO">Kichen</h3>
            </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="main-navigation">
    <ul className="nav-links navbar-nav ml-auto" >
            <Link to="/listings">
                <li>Listings</li>
            </Link>
            <Link to="/newlisting">
                <li>New</li>
            </Link>
            <Link to="/cart">
                <li>Cart</li>
            </Link>

        </ul>
    </div>
  </nav>

  );
}

export default Nav;
