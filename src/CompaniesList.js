import React, { useState, useEffect } from 'react';
import CompanySearch from './CompanySearch';
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
		}
		getAllCompanies();
	}, []);

	async function searchCompanies(name) {
		setIsLoading(true);
		let companies = await JoblyApi.getCompaniesName(name);
		setCompanies(companies);
		setIsLoading(false);
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<CompanySearch searchCompanies={searchCompanies} />
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
