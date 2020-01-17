import axios from 'axios';

class Request {
	constructor(uri, baseURL) {
		this.uri = uri;
		this.baseURL = baseURL || 'http://10.0.2.2:3333/api/v1/';
		this.request = axios.create({ baseURL });
	}

	get() {
		return this.request({
			url: this.uri,
			baseURL: this.baseURL,
		}).then(({data}) => data).catch((err) => console.log({err}));
	}

	getOne(id) {
		return this.request({
			url: `${this.uri}/${id}`,
			baseURL: this.baseURL,
		}).then(data => data).catch((err) => console.log(err));
	}

	post(value) {
		return this.request({
			url: `${this.uri}`,
			method: 'POST',
			data: value,
			baseURL: this.baseURL,
		}).then(data => data).catch((err) => console.log({err}));
	}

	put(value, id) {
		return this.request({
			url: `${this.uri}/${id}`,
			method: 'PUT',
			data: value,
			baseURL: this.baseURL,
		}).then(data => data).catch((err) => console.log({err}));
	}

	delete(id) {
		return this.request({
			url: `${this.uri}/${id}`,
			method: 'DELETE',
			baseURL: this.baseURL,
		}).then(data => data).catch((err) => console.log(err));
	}
}

export default Request;
