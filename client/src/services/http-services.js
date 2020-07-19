import 'whatwg-fetch';
import { Component } from 'react';
const url = 'https://kichen.herokuapp.com';

class HttpServiceClass extends Component {
	constructor(props) {
		super(props);
		// binds
		this.getItems = this.getItems.bind(this);
		this.postItem = this.postItem.bind(this);
		this.getIp = this.getIp.bind(this);
		this.newCart = this.newCart.bind(this);
		this.ifCart = this.ifCart.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.getCart = this.getCart.bind(this);
	}

	getIp = () => { // not in use https://api.ipify.org?format=json
		var promise = new Promise((resolve, reject) => {
			fetch('https://api.ipify.org?format=json').then((res) => {
				resolve(res.json());
			});
		});
		return promise;
	};

	getItems = () => {
		var promise = new Promise((resolve, reject) => {
			fetch(url+ "/getitem").then((res) => {
				resolve(res.json());
			});
		});
		return promise;
	};

	postItem = (itemjson) => {

		fetch(url+ "/postitem", { 
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(itemjson)
		});
		console.log('fetch done');
	};
    

	ifCart = (iptocheck) => {
        var temp = {geoip: iptocheck};
		var promise = new Promise((resolve, reject) => {
			fetch(url+ "/ifcart", {
            method:'POST',
            headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(temp)
        })
        .then((res) => {
				resolve(res.json());
			});
		});
		return promise;
	};


	newCart = (itemjson) => {
		fetch(url + "/newcart", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(itemjson)
		});
		console.log('created cart');
    };
    

    addToCart = (idsJson) => {
		fetch(url + "/cartadditem", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(idsJson)
		});
		console.log('added item to cart', idsJson);
	};
    
    
    removeFromCart = (idsJson) => {
        console.log('removed item from cart', idsJson);
		var promise = new Promise((resolve, reject) => {
			fetch(url + "/cartremoveitem", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(idsJson)
            })
        .then((res) => {
				resolve(res.json());
			});
		});
		return promise;
	};
    
    
	getCart = (ip) => {
        var temp = {geoip: ip};
		var promise = new Promise((resolve, reject) => {
			fetch(url + "/getcart", {
            method:'PUT',
            headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(temp)
        })
        .then((res) => {
				resolve(res.json());
			});
		});
		return promise;
	};

}

export default HttpServiceClass;
