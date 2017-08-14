import React, { Component } from 'react';
var ReactDOM = require('react-dom');

// Import routing components
import { BrowserRouter, Route } from 'react-router-dom';

class Home extends Component {
	render(){
		return (<h1>Home Page</h1>);
	}
}

class About extends Component {
	render(){
		return (<h1>About page</h1>);
	}
}

/*Each route is defined with Route*/
ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
		</div>
	</BrowserRouter>,
	document.getElementById('react-app')
);
