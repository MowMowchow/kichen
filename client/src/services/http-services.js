import 'whatwg-fetch';
import { Component } from 'react';

class HttpServiceClass extends Component {
	constructor(props) {
		super(props);

	}

	getItems = () => {
		// http
		var promise = new Promise((resolve, reject) => {
			fetch('http://localhost:3001/getitem').then((res) => {
				resolve(res.json());
			});
		});
		return promise;
	};


	
}

export default HttpServiceClass;
