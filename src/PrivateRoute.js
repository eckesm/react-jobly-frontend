import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import CurrentUserContext from './CurrentUserContext';
import RestrictedAccess from './RestrictedAccess';

const PrivateRoute = ({ exact, path, children }) => {
	const { currentUser } = useContext(CurrentUserContext);

	if (!currentUser) {
		return <RestrictedAccess notice="You must be logged in to access the requested page." />;
	}

	return (
		<Route exact={exact} path={path}>
			{children}
		</Route>
	);
};

export default PrivateRoute;
