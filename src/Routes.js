import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CurrentUserContext from './CurrentUserContext';
import RestrictedAccess from './RestrictedAccess';
import Home from './Home';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Profile from './Profile';

const Routes = ({ loginUser, logoutUser }) => {
	const currentUser = useContext(CurrentUserContext);
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/companies">
				{currentUser ? (
					<CompaniesList />
				) : (
					<RestrictedAccess notice="You must be logged in to view companies." />
				)}
			</Route>
			<Route exact path="/companies/:handle">
				{currentUser ? (
					<CompanyDetail />
				) : (
					<RestrictedAccess notice="You must be logged in to view details about a company." />
				)}
			</Route>
			<Route exact path="/jobs">
				{currentUser ? <JobsList /> : <RestrictedAccess notice="You must be logged in to view jobs." />}
			</Route>
			<Route exact path="/login">
				<LoginForm loginUser={loginUser} />
			</Route>
			<Route exact path="/signup">
				<SignupForm />
			</Route>
			<Route exact path="/profile">
				{currentUser ? (
					<Profile />
				) : (
					<RestrictedAccess notice="You must be logged in to update profile details." />
				)}
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
