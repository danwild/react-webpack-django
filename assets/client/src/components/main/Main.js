import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';

export default class Main extends React.Component {

	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route path='/about' component={AboutPage}/>
				</Switch>
			</main>
		)
	}

}