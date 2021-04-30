import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/companies">
				<CompaniesList />
			</Route>
			<Route exact path="/companies/:handle">
				<CompanyDetail />
			</Route>
			<Route exact path="/jobs">
				<JobsList />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/signup">
				<Signup />
			</Route>
			<Route exact path="/profile">
				<Profile />
			</Route>
		</Switch>
	);
};

export default Routes;
