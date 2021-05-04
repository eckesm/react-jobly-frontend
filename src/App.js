import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import useLocalStorageState from './hooks/useLocalStorageState';
import Navbar from './Navbar';
import Routes from './Routes';
import JoblyApi from './api';
import CurrentUserContext from './CurrentUserContext';
import jwt from 'jsonwebtoken';
import './App.css';

function App() {
	const [ token, setToken ] = useLocalStorageState('token', null);
	const history = useHistory();
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ applications, setApplications ] = useState([]);
	const [ isLoaded, setIsLoaded ] = useState(false);

	async function loginUser(username, password) {
		try {
			let token = await JoblyApi.loginUser(username, password);
			setToken(token);
			return { status: 'success' };
		} catch (e) {
			return { status: 'error', messages: e };
		}
	}

	const logoutUser = () => {
		setToken(null);
		setCurrentUser(null);
		history.push('/');
	};

	async function signupUser(username, password, firstName, lastName, email) {
		try {
			let token = await JoblyApi.registerUser(username, password, firstName, lastName, email);
			setToken(token);
			return { status: 'success' };
		} catch (e) {
			return { status: 'error', messages: e };
		}
	}

	function applyToJob(jobId) {
		JoblyApi.applyToJob(currentUser.username, jobId);
		setApplications([ ...applications, jobId ]);
	}

	useEffect(
		() => {
			async function getUser() {
				if (token) {
					let { username } = jwt.decode(token);
					JoblyApi.token = token;
					let currentUser = await JoblyApi.getUser(username);
					setCurrentUser(currentUser);
					setApplications(currentUser.applications);
				}
				setIsLoaded(true);
			}
			setIsLoaded(false);
			getUser();
		},
		[ token ]
	);

	if (!isLoaded) {
		return <Spinner color="info" />;
	}

	return (
		<div className="App">
			<CurrentUserContext.Provider value={{ currentUser, applications, applyToJob }}>
				<Navbar logoutUser={logoutUser} />
				<Routes loginUser={loginUser} signupUser={signupUser} />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
