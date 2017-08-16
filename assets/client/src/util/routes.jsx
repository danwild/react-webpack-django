import React, { Component } from 'react';

var ReactDOM = require('react-dom');

// Import routing components
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../presentation/home.jsx';
import About from '../presentation/home.jsx';


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
