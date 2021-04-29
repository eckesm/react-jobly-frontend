import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

const Home = () => {
	return (
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">Jobly</h1>
					<p className="lead">
						All the jobs in one, convenient place.
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Home;
