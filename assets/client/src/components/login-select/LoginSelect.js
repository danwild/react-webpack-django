import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Icon} from 'react-fa'

export default class LoginSelect extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<span className="LoginSelect">
				<span className="label">Logged in as:</span>
				<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="btn-info">
					<DropdownToggle caret>
						Daniel.Wild@csiro.au
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>Settings <Icon name="cog" /></DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Logout <Icon name="power-off" /></DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
			</span>
		);
	}
}