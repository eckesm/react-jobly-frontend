import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import JoblyApi from './api';

const SignupForm = () => {
	const initialState = {
		username  : '',
		password  : '',
		firstName : '',
		lastName  : '',
		email     : ''
	};
	const [ formData, setFormData ] = useState(initialState);
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
	};
	async function handleSubmit(e) {
		e.preventDefault();
		let token = await JoblyApi.registerUser(
			formData.username,
			formData.password,
			formData.firstName,
			formData.lastName,
			formData.email
		);
		console.log(token);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<h1>Login</h1>
			<FormGroup>
				<Label for="username">Username</Label>
				<Input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
			</FormGroup>
			<FormGroup>
				<Label for="password">Password</Label>
				<Input
					type="password"
					name="password"
					id="password"
					value={formData.password}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="firstName">First name</Label>
				<Input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
			</FormGroup>
			<FormGroup>
				<Label for="lastName">Last name</Label>
				<Input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
			</FormGroup>
			<FormGroup>
				<Label for="email">Email</Label>
				<Input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
};

export default SignupForm;
