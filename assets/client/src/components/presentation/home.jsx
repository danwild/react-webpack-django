import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import '../../app.less';

export default class Home extends Component {
	render(){
		return (
			<div>
				<h1>Home Page</h1>
				<Alert color="success">
					<strong>Whoooah!</strong> We successfully react-strapped this UI's arse!
				</Alert>
			</div>
		);
	}
}