import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SignupForm.css';

const SignupForm = ({ signupUser }) => {
	const initialState = {
		username  : '',
		password  : '',
		firstName : '',
		lastName  : '',
		email     : ''
	};
	const [ formData, setFormData ] = useState(initialState);
	const [ errorMessages, setErrorMessages ] = useState(null);
	const history = useHistory();

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[name] : value
		}));
	};
	async function handleSubmit(e) {
		e.preventDefault();
		let res = await signupUser(
			formData.username,
			formData.password,
			formData.firstName,
			formData.lastName,
			formData.email
		);
		if (res.status === 'success') {
			history.push('/');
		}
		else {
			setErrorMessages(res.messages);
		}
	}

	return (
		<Form className="SignupForm" onSubmit={handleSubmit}>
			<h1>Signup</h1>
			{errorMessages && (
				<div>
					{errorMessages.map((error, i) => (
						<Alert color="danger" key={i}>
							{error}
						</Alert>
					))}
				</div>
			)}
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="username">
					Username
				</Label>
				<Input
					className="SignupForm-input"
					type="text"
					name="username"
					id="username"
					value={formData.username}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="password">
					Password
				</Label>
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
				<Label className="SignupForm-label" for="firstName">
					First name
				</Label>
				<Input
					className="SignupForm-input"
					type="text"
					name="firstName"
					id="firstName"
					value={formData.firstName}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="lastName">
					Last name
				</Label>
				<Input
					className="SignupForm-input"
					type="text"
					name="lastName"
					id="lastName"
					value={formData.lastName}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup className="SignupForm-formGroup">
				<Label className="SignupForm-label" for="email">
					Email
				</Label>
				<Input
					className="SignupForm-input"
					type="text"
					name="email"
					id="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
};

export default SignupForm;
