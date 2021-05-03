import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Jumbotron } from 'reactstrap';
import JoblyApi from './api';
import JobsList from './JobsList';

const Company = () => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ company, setCompany ] = useState(null);
	const { handle } = useParams();

	useEffect(() => {
		async function getCompany() {
			let company = await JoblyApi.getCompany(handle);
			setCompany(company);
			setIsLoading(false);
		}
		getCompany();
	}, [handle]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">{company.name}</h1>
					<p className="lead">{company.description}</p>
				</Container>
				<JobsList companyHandle={company.handle} />
			</Jumbotron>
		</div>
	);
};

export default Company;
