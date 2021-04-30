import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from 'reactstrap';

const JoblyNavbar = props => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Jobly</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/companies">Companies</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/jobs">Jobs</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/login">Login</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/signup">Signup</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/profile">Profile</NavLink>
						</NavItem>
					</Nav>
					{/* <NavbarText>Simple Text</NavbarText> */}
				</Collapse>
			</Navbar>
		</div>
	);
};

export default JoblyNavbar;
