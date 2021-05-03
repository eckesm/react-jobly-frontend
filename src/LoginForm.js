import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import JoblyApi from './api';
import './LoginForm.css';

const LoginForm = ({ loginUser }) => {
	const initialState = {
		username : '',
		password : ''
	};
	const [ formData, setFormData ] = useState(initialState);
	const [ errorMessage, setErrorMessage ] = useState(null);
	const [ isLoggedIn, setIsLoggedIn ] = useState(null);
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
	};
	async function handleSubmit(e) {
		e.preventDefault();
		let res = await loginUser(formData.username, formData.password);
		// console.log('res', res);
		if (res.status === 'success') {
			setErrorMessage(null);
			setFormData(initialState);
			setIsLoggedIn(true);
		}
		else {
			setErrorMessage(res.message);
		}
	}

	if (isLoggedIn) {
		return <Redirect to="/" />;
	}
	return (
		<Form onSubmit={handleSubmit}>
			<h1>Login</h1>
			{errorMessage && <p className="LoginForm-errorMessage">{errorMessage}</p>}
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
			<Button>Submit</Button>
		</Form>
	);
};

export default LoginForm;
