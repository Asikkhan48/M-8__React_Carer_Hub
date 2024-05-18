import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStorage";
import { key } from "localforage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, SetAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobsFilter = filter => {
        if(filter === "all") {
            setDisplayJobs(appliedJobs);
        } else if (filter === "remote") {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs)
        } else if (filter === "onsite") {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs)
        }
    }


    useEffect ( () => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0) {

            const jobsApplied = [];
            for(const id of storedJobIds) {
                const job = jobs.find(job =>  job.id === id);
                if(job) {
                    jobsApplied.push(job)
                }
            }
            SetAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }

    } , [jobs])



    return (
        <div className="text-center mt-6 p-6">
            <h2 className="text-2xl">Apply the Jobs: {appliedJobs.length
            } </h2>

            <div>
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter("all")}><a>All</a></li>
                        <li onClick={() => handleJobsFilter("remote")}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter("onsite")}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>

           <div className="border-5 border-yellow-400">
           {
                displayJobs.map(job => 
                <div key={job.id} className="space-y-2 mt-5  rounded-lg">
                    <h3><span className="font-bold">Job Title:</span> {job.job_title}</h3>
                    <h3> <span className="font-bold">Name:</span> {job.company_name}</h3>
                    <h3><span>Type:</span> {job.remote_or_onsite}</h3>
                </div>)
            }

           </div>
        </div>
    );
};

export default AppliedJobs;