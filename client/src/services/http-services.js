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
    


	
}

export default HttpServiceClass;
