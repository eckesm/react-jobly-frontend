import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import useLocalStorageState from './hooks/useLocalStorageState';
import Navbar from './Navbar';
import Routes from './Routes';
import JoblyApi from './api';
import CurrentUserContext from './CurrentUserContext';
import './App.css';

function App() {
	const [ token, setToken ] = useLocalStorageState('token', '');
	const [ username, setUsername ] = useLocalStorageState('username', '');
	const history = useHistory();
	const [ currentUser, setCurrentUser ] = useState(null);

	async function loginUser(username, password) {
		setUsername(username);
		let res = await JoblyApi.loginUser(username, password);
		if (res.status === 'success') setToken(res.token);
		return res;
	}

	const logoutUser = () => {
		setUsername('');
		setToken('');
		setCurrentUser(null);
		history.push('/');
	};

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
				<Routes loginUser={loginUser} logoutUser={logoutUser} />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
