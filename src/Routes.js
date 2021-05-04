import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Profile from './Profile';

const Routes = ({ loginUser, signupUser }) => {

	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<PrivateRoute exact path="/companies">
				<CompaniesList />
			</PrivateRoute>
			<PrivateRoute exact path="/companies/:handle">
				<CompanyDetail />
			</PrivateRoute>
			<PrivateRoute exact path="/jobs">
				<JobsList />
			</PrivateRoute>
			<Route exact path="/login">
				<LoginForm loginUser={loginUser} />
			</Route>
			<Route exact path="/signup">
				<SignupForm signupUser={signupUser} />
			</Route>
			<PrivateRoute exact path="/profile">
				<Profile />
			</PrivateRoute>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
