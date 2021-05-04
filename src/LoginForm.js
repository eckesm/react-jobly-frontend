import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginForm.css';

const LoginForm = ({ loginUser }) => {
	const initialState = {
		username : '',
		password : ''
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
		let res = await loginUser(formData.username, formData.password);
		if (res.status === 'success') {
			history.push('/');
		}
		else {
			setErrorMessages(res.messages);
		}
	}

	return (
		<Form className="LoginForm" onSubmit={handleSubmit}>
			<h1>Login</h1>
			{errorMessages && (
				<div>
					{errorMessages.map((error, i) => (
						<Alert color="danger" key={i}>
							{error}
						</Alert>
					))}
				</div>
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
					required
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
					required
				/>
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
};

export default LoginForm;
