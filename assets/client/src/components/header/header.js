import React from 'react';
import { Link } from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import LoginSelect from '../login-select/LoginSelect';

export default class Header extends React.Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			
			<div>
				<nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<a className="navbar-brand" href="#">MyApp</a>

					<div className="collapse navbar-collapse" id="navbarColor01">
						<ul className="navbar-nav mr-auto">
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
						</ul>

						<LoginSelect />

					</div>
				</nav>
			</div>
			
			//<div>
			//	<Navbar color="faded" light toggleable>
			//		<NavbarToggler right onClick={this.toggle} />
			//		<NavbarBrand href="/">MyApp</NavbarBrand>
			//		<Collapse isOpen={this.state.isOpen} navbar>
			//			<Nav className="ml-auto" navbar>
			//				<NavItem>
			//					<NavLink href="/">Home</NavLink>
			//				</NavItem>
			//				<NavItem>
			//					<NavLink href="/about">About</NavLink>
			//				</NavItem>
			//			</Nav>
			//		</Collapse>
			//	</Navbar>
			//</div>
		);
	}

	//render() {
	//	return (
	//
	//		<header className="row">
	//			<nav>
	//				<ul>
	//					<li><Link to='/'>Home</Link></li>
	//					<li><Link to='/about'>About</Link></li>
	//				</ul>
	//			</nav>
	//		</header>
	//
	//	)
	//}

}
