import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const CompanyCard = ({ name, description, logoUrl }) => {
	return (
		<Card>
			<CardImg top width="100%" src={logoUrl} alt={name} />
			<CardBody>
				<CardTitle tag="h5">{name}</CardTitle>
				<CardText>{description}</CardText>
				<Button>Go somewhere</Button>
			</CardBody>
		</Card>
	);
};

export default CompanyCard;
