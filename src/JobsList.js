import React, { useState, useEffect } from 'react';
import JobSearch from './JobSearch';
import JobCard from './JobCard';
import JoblyApi from './api';

const JobsList = ({ companyHandle }) => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ jobs, setJobs ] = useState([]);

	useEffect(() => {
		async function getAllJobs() {
			let jobs = await JoblyApi.getJobs();

			if (companyHandle === null) {
				setJobs(jobs);
			}
			else {
				let filteredJobs = jobs.filter(job => job.companyHandle === companyHandle);
				setJobs(filteredJobs);
			}
			setIsLoading(false);
			// console.log(jobs);
		}
		getAllJobs();
	}, []);

	async function searchJobs(title) {
		setIsLoading(true);
		let jobs = await JoblyApi.getJobsName(title);
		setJobs(jobs);
		setIsLoading(false);
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<JobSearch searchJobs={searchJobs} />
			<h1>Jobs</h1>
			<div>
				{jobs.map(job => (
					<JobCard
						key={job.id}
						id={job.id}
						title={job.title}
						companyHandle={job.companyHandle}
						companyName={job.companyName}
						equity={job.equity}
						salary={job.salary}
					/>
				))}
			</div>
		</div>
	);
};

export default JobsList;

JobsList.defaultProps = {
	companyHandle : null
};
