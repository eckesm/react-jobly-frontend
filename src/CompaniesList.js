import React, { useState, useEffect } from 'react';
// import { Container, Jumbotron } from 'reactstrap';
import CompanyCard from './CompanyCard';
import JoblyApi from './api';

const CompaniesList = () => {
	const [ companies, setCompanies ] = useState([]);

	useEffect(() => {
		async function getAllCompanies() {
			let allCompanies = await JoblyApi.getCompanies();
			// let allCompanies = await JoblyApi.getCompany('bauer-gallagher');
			setCompanies(allCompanies);
			console.log('allCompanies', allCompanies);
			console.log('companies', companies);
		}
		getAllCompanies();
	}, []);
	
	// console.log({ companies });
	
	return (
		<div>
			<h1>Companies</h1>
			{/* <p>{companies}</p> */}
		</div>
	);
};

export default CompaniesList;

// CompaniesList.defaultProps = {
// 	companies : JoblyApi.getCompanies()
// };
