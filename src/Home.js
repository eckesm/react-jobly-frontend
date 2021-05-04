import React, { useContext } from 'react';
// import { Container, Jumbotron } from 'reactstrap';
import CurrentUserContext from './CurrentUserContext';
import './Home.css';

const Home = () => {
	let { currentUser } = useContext(CurrentUserContext);
	return (
		<div className="Home">
			{/* <Jumbotron fluid> */}
			{/* <Container fluid>  */}
			<h1 className="display-3">Jobly</h1>
			<p className="lead">
				{currentUser ? `Welcome, ${currentUser.firstName}!` : 'All the jobs in one, convenient place.'}
			</p>
			{/* </Container> */}
			{/* </Jumbotron> */}
		</div>
	);
};

export default Home;
