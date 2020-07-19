import 'whatwg-fetch';
import { Component } from 'react';
const url = "https://kichen-test.herokuapp.com";


class HttpServiceClass extends Component {
	constructor(props) {
		super(props);
		
		// binds
		this.getItems = this.getItems.bind(this);
		this.postItem = this.postItem.bind(this);
		this.getIp = this.getIp.bind(this);
		this.newCart = this.newCart.bind(this);

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
		// http
		var promise = new Promise((resolve, reject) => {
			fetch(url+ "/getitem").then((res) => {
				resolve(res.json());
			});
		});
		return promise;
	};

	
	postItem = (itemjson) => {
		// http
		fetch(url+ "/postitem", { //wadawdawd
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
		// http
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
		// http
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
