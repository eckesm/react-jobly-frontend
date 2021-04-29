import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import CompaniesList from './CompaniesList';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/"><Home /></Route>
            <Route exact path='/companies'><CompaniesList /></Route>
		</Switch>
	);
};

export default Routes;
