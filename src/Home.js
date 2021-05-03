import React, { useContext } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import CurrentUserContext from './CurrentUserContext';

const Home = () => {
	let currentUser = useContext(CurrentUserContext);
	console.log(currentUser);
	return (
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">Jobly</h1>
					<p className="lead">
						{currentUser ? `Welcome, ${currentUser.firstName}` : 'All the jobs in one, convenient place.'}
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Home;
