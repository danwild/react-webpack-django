import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//require("font-awesome-webpack");

//require('font-awesome/css/font-awesome.css');

import App from './components/App';

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('react-app'));
