import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const CompanySearch = ({ searchCompanies }) => {
	const [ searchCriteria, setSearchCriteria ] = useState('');

	const handleChange = e => {
		setSearchCriteria(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		searchCompanies(searchCriteria);
        setSearchCriteria('')
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputGroup>
					<Input onChange={handleChange} placeholder="Company name" value={searchCriteria} />
					<InputGroupAddon addonType="append">
						<Button color="secondary">Search</Button>
					</InputGroupAddon>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default CompanySearch;
