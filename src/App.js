import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorageState from './hooks/useLocalStorageState';
import Navbar from './Navbar';
import Routes from './Routes';
import JoblyApi from './api';
import CurrentUserContext from './CurrentUserContext';
import './App.css';

function App() {
	const [ token, setToken ] = useLocalStorageState('token', '');
	const [ username, setUsername ] = useLocalStorageState('username', '');
	// const [ username, setUsername ] = useState(null);
	const history = useHistory();
	const [ currentUser, setCurrentUser ] = useState(null);

	async function loginUser(username, password) {
		let res = await JoblyApi.loginUser(username, password);
		if (res.status === 'success'){
			setUsername(username);
			setToken(res.token);
		}
		return res;
	}

	const logoutUser = () => {
		setUsername('');
		setToken('');
		setCurrentUser(null);
		history.push('/');
	};

	async function signupUser(username, password, firstName, lastName, email) {
		let res = await JoblyApi.registerUser(username, password, firstName, lastName, email);
		if (res.status === 'success'){
			setUsername(username);
			setToken(res.token);
		}
		return res;
	}

	useEffect(
		() => {
			async function getUser() {
				JoblyApi.token = token;
				let currentUser = await JoblyApi.getUser(username);
				setCurrentUser(currentUser);
			}
			if (username !== '') {
				getUser();
			}
		},
		[ token ]
	);

	return (
		<div className="App">
			<CurrentUserContext.Provider value={currentUser}>
				<Navbar logoutUser={logoutUser} />
				<Routes loginUser={loginUser} signupUser={signupUser} />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
