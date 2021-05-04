import React, { useState, useContext } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import JoblyApi from './api';
import CurrentUserContext from './CurrentUserContext';
import './Profile.css';

const Profile = () => {
	let { currentUser } = useContext(CurrentUserContext);
	let initialState = {
		firstName : currentUser.firstName,
		lastName  : currentUser.lastName,
		email     : currentUser.email,
		password  : ''
	};
	const [ formData, setFormData ] = useState(initialState);
	const [ errorMessages, setErrorMessages ] = useState(null);
	const [ successMessage, setSuccessMessage ] = useState(null);
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
	};
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			let user = await JoblyApi.updateUser(
				currentUser.username,
				formData.firstName,
				formData.lastName,
				formData.email,
				formData.password
			);
			currentUser = user;
			initialState = {
				firstName : currentUser.firstName,
				lastName  : currentUser.lastName,
				email     : currentUser.email,
				password  : ''
			};
			setFormData(initialState);
			setErrorMessages(null);
			setSuccessMessage(`${currentUser.username} updated successfully!`);
		} catch (e) {
			setSuccessMessage(null);
			setErrorMessages(e);
		}
	}
	return (
		<Form className="Profile" onSubmit={handleSubmit}>
			<h1>Profile</h1>
			{errorMessages && (
				<div>
					{errorMessages.map((error, i) => (
						<Alert color="danger" key={i}>
							{error}
						</Alert>
					))}
				</div>
			)}
			{successMessage && <Alert color="success">{successMessage}</Alert>}
			<FormGroup className="Profile-formGroup">
				<Label className="Profile-label" for="firstName">
					First Name
				</Label>
				<Input
					className="Profile-input"
					type="text"
					name="firstName"
					id="firstName"
					value={formData.firstName}
					onChange={handleChange}
					required
				/>
			</FormGroup>
			<FormGroup className="Profile-formGroup">
				<Label className="Profile-label" for="lastName">
					Last Name
				</Label>
				<Input
					className="Profile-input"
					type="text"
					name="lastName"
					id="lastName"
					value={formData.lastName}
					onChange={handleChange}
					required
				/>
			</FormGroup>
			<FormGroup className="Profile-formGroup">
				<Label className="Profile-label" for="email">
					Email Address
				</Label>
				<Input
					className="Profile-input"
					type="text"
					name="email"
					id="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</FormGroup>
			<FormGroup className="Profile-formGroup">
				<Label className="Profile-label" for="password">
					Password
				</Label>
				<Input
					className="Profile-input"
					type="password"
					name="password"
					id="password"
					value={formData.password}
					onChange={handleChange}
					required
				/>
			</FormGroup>
			<Button>Save Changes</Button>
		</Form>
	);
};

export default Profile;
