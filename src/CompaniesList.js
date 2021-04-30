import React, { useState, useEffect } from 'react';
// import { Container, Jumbotron } from 'reactstrap';
import CompanyCard from './CompanyCard';
import JoblyApi from './api';

const CompaniesList = () => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ companies, setCompanies ] = useState([]);

	useEffect(() => {
		async function getAllCompanies() {
			let companies = await JoblyApi.getCompanies();
			setCompanies(companies);
			setIsLoading(false);
			console.log(companies)
		}
		getAllCompanies();
	}, []);
	
	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h1>Companies</h1>
			<div>
				{companies.map(company => (
					<CompanyCard
						key={company.handle}
						handle={company.handle}
						name={company.name}
						description={company.description}
						logoUrl={company.logoUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default CompaniesList;

// CompaniesList.defaultProps = {
// 	companies : JoblyApi.getCompanies()
// };
