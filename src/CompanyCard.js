import React from 'react';
import {Link} from 'react-router-dom'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
// import logo1 from './logos/logo1.png';
// import logo2 from './logos/logo2.png';
// import logo3 from './logos/logo3.png';
// import logo4 from './logos/logo4.png';

const CompanyCard = ({ handle, name, description, logoUrl }) => {

	return (
		<Card>
			<CardImg top width="100%" src={logoUrl} alt={name} />
			<CardBody>
				<CardTitle tag="h5">{name}</CardTitle>
				<CardText>{description}</CardText>
				{/* <Button>Go somewhere</Button> */}
				<Link to={`/companies/${handle}`}>Go to {name} Company Page</Link>
			</CardBody>
		</Card>
	);
};

export default CompanyCard;
