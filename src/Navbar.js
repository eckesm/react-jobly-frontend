import React, { useState, useContext } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import CurrentUserContext from './CurrentUserContext';
import './Navbar.css';

const JoblyNavbar = ({ logoutUser }) => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const currentUser = useContext(CurrentUserContext);

	return (
		<div>
			<Navbar color="dark" dark expand="md">
				<NavbarBrand href="/">Jobly</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						{!currentUser && (
							<NavItem>
								<NavLink href="/signup">Signup</NavLink>
							</NavItem>
						)}
						{currentUser && (
							<NavItem>
								<NavLink href="/companies">Companies</NavLink>
							</NavItem>
						)}
						{currentUser && (
							<NavItem>
								<NavLink href="/jobs">Jobs</NavLink>
							</NavItem>
						)}
						{currentUser && (
							<NavItem>
								<NavLink href="/profile">Profile</NavLink>
							</NavItem>
						)}
					</Nav>
					<Nav className="ml-auto" navbar>
						{currentUser && (
							<NavItem className="Navbar-logoutButton">
								<NavLink onClick={logoutUser}>Logout {currentUser.username}</NavLink>
							</NavItem>
						)}
						{!currentUser && (
							<NavItem>
								<NavLink href="/login">Login</NavLink>
							</NavItem>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default JoblyNavbar;
