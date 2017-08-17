import React from 'react';
import '../App.less';
import { UncontrolledAlert } from 'reactstrap';

export default class About extends React.Component {
	render(){
		return (
			<div>
				<h1>About page</h1>
				<UncontrolledAlert color="info">
					I am an alert and I can be dismissed!
				</UncontrolledAlert>
			</div>
		);
	}
}