import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const JobSearch = ({ searchJobs }) => {
	const [ searchCriteria, setSearchCriteria ] = useState('');

	const handleChange = e => {
		setSearchCriteria(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		searchJobs(searchCriteria);
		setSearchCriteria('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<InputGroup>
					<Input onChange={handleChange} placeholder="Job name" value={searchCriteria} />
					<InputGroupAddon addonType="append">
						<Button color="secondary">Search</Button>
					</InputGroupAddon>
				</InputGroup>
			</FormGroup>
		</Form>
	);
};

export default JobSearch;
