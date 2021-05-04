import React, { useState, useEffect, useContext } from 'react';
// import { Spinner } from 'reactstrap';
import JobSearch from './JobSearch';
import JobCard from './JobCard';
import JoblyApi from './api';
import CurrentUserContext from './CurrentUserContext';
import './JobsList.css';

const JobsList = ({ companyHandle }) => {
	let { applications } = useContext(CurrentUserContext);
	// const [ isLoading, setIsLoading ] = useState(true);
	const [ jobs, setJobs ] = useState([]);
	useEffect(
		() => {
			async function getAllJobs() {
				let jobs = await JoblyApi.getJobs();

				if (companyHandle === null) {
					setJobs(jobs);
				}
				else {
					let filteredJobs = jobs.filter(job => job.companyHandle === companyHandle);
					setJobs(filteredJobs);
				}
				// setIsLoading(false);
			}
			getAllJobs();
		},
		[ companyHandle ]
	);

	async function searchJobs(title) {
		// setIsLoading(true);
		let jobs = await JoblyApi.getJobsName(title);
		setJobs(jobs);
		// setIsLoading(false);
	}

	// async function applyToJob(jobId) {
	// 	let res = await JoblyApi.applyToJob(currentUser.username, jobId);
	// 	console.log(res);
	// }

	// if (isLoading) {
		// return <p>Loading...</p>;
		// return <Spinner color="light" />;
	// }
	return (
		<div className="JobsList">
			<h1>Jobs</h1>
			<JobSearch searchJobs={searchJobs} />
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
						// isApplied={currentUser.applications.includes(job.id)}
						isApplied={applications.includes(job.id)}
						// applyToJob={applyToJob}
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
