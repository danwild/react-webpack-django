import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

export default class App extends React.Component {
	render(){
		return (
			<div id="container">
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}