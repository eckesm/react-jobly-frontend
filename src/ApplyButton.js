import React, { useState } from 'react';
import { Button } from 'reactstrap';
// import { applyToJob } from '../../backend/models/user';
// import JoblyApi from './api';

const ApplyButton = ({ isApplied, applyToJob, jobId }) => {
	const [ isAppliedState, setIsAppliedState ] = useState(isApplied);
	const handleClick = () => {
		applyToJob(jobId);
		setIsAppliedState(true);
	};

	return (
		<Button
			// className={isAppliedState ? 'ApplyButton-isApplied' : 'ApplyButton-notApplied'}
			onClick={handleClick}
			color="info"
			disabled={isAppliedState ? true : false}
		>
			{isAppliedState ? 'Applied' : 'Apply'}
		</Button>
	);
};

export default ApplyButton;
