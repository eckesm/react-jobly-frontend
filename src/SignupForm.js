import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import './SignupForm.css';

const SignupForm = ({signupUser}) => {
	const initialState = {
		username  : '',
		password  : '',
		firstName : '',
		lastName  : '',
		email     : ''
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
		let res=await signupUser(formData.username,
			formData.password,
			formData.firstName,
			formData.lastName,
			formData.email)
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
		<Form className="SignupForm" onSubmit={handleSubmit}>
			<h1>Signup</h1>
			{errorMessages && (
				<ListGroup>
					{errorMessages.map((error, i) => (
						<ListGroupItem key={i} className="SignupForm-errorMessage">
							{error}
						</ListGroupItem>
					))}
				</ListGroup>
			)}
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="username">Username</Label>
				<Input className="SignupForm-input" type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
			</FormGroup>
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="password">Password</Label>
				<Input
					className="SignupForm-input"
					type="password"
					name="password"
					id="password"
					value={formData.password}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="firstName">First name</Label>
				<Input className="SignupForm-input" type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
			</FormGroup>
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="lastName">Last name</Label>
				<Input className="SignupForm-input" type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
			</FormGroup>
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="email">Email</Label>
				<Input className="SignupForm-input" type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
};

export default SignupForm;
