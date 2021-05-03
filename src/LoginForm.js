import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import './LoginForm.css';

const LoginForm = ({ loginUser }) => {
	const initialState = {
		username : '',
		password : ''
	};
	const [ formData, setFormData ] = useState(initialState);
	const [ errorMessages, setErrorMessages ] = useState(null);
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
		if (res.status === 'success') {
			setErrorMessages(null);
			setFormData(initialState);
			setIsLoggedIn(true);
		}
		else {
			setErrorMessages(res.messages);
		}
	}

	if (isLoggedIn) {
		return <Redirect to="/" />;
	}
	return (
		<Form className="LoginForm" onSubmit={handleSubmit}>
			<h1>Login</h1>
			{errorMessages && (
				<ListGroup>
					{errorMessages.map((error, i) => (
						<ListGroupItem key={i} className="LoginForm-errorMessage">
							{error}
						</ListGroupItem>
					))}
				</ListGroup>
			)}
			<FormGroup className="LoginForm-formGroup">
				<Label className="LoginForm-label" for="username">
					Username
				</Label>
				<Input
					className="LoginForm-input"
					type="text"
					name="username"
					id="username"
					value={formData.username}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="LoginForm-formGroup">
				<Label className="LoginForm-label" for="password">
					Password
				</Label>
				<Input
					className="LoginForm-input"
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
