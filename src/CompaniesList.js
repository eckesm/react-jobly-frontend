import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import CompanySearch from './CompanySearch';
import CompanyCard from './CompanyCard';
import JoblyApi from './api';
import './CompaniesList.css'

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
		// return <p>Loading...</p>;
		return <Spinner color='light' />
	}

	return (
		<div className='CompaniesList'>
			<h1>Companies</h1>
			<CompanySearch searchCompanies={searchCompanies} />
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
