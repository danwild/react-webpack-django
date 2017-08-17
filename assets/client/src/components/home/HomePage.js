import React from 'react';
import { Alert } from 'reactstrap';
import {Icon} from 'react-fa'
import '../App.less';

export default class Home extends React.Component {
	render(){
		return (
			<div>
				<h1>Home Page</h1>
				<Alert color="success">
					<strong>Whoooah!</strong> We successfully react-strapped this UI's arse!
					<p>And; here's a spinning icon: <Icon spin name="spinner" /></p>
				</Alert>
			</div>
		);
	}
}