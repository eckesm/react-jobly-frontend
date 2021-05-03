import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardTitle, List } from 'reactstrap';

const JobCard = ({ id, title, companyHandle, companyName, equity, salary }) => {
	return (
		<Card>
			<CardBody>
				<CardTitle tag="h5">{title}</CardTitle>
				<Link to={`/companies/${companyHandle}`}>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						{companyName}
					</CardSubtitle>
				</Link>
				<List type="unstyled">
					<li>Salary: {salary}</li>
					<li>Equity: {equity}</li>
				</List>
			</CardBody>
		</Card>
	);
};

export default JobCard;
