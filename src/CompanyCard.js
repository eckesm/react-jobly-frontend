import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import './CompanyCard.css'

const CompanyCard = ({ handle, name, description, logoUrl }) => {
	return (
		<Card className='CompanyCard'>
			{/* <CardBody className='CompanyCard-body'> */}
			<div className='CompanyCard-body'>
			<Link to={`/companies/${handle}`}><CardTitle tag="h5">{name}</CardTitle></Link>
				<CardText>{description}</CardText>
			</div>
			{logoUrl && <img className='CompanyCard-logo' src={logoUrl} alt={name} />}
		</Card>
	);
};

export default CompanyCard;
