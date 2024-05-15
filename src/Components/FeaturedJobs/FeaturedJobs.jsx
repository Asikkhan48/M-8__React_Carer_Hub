import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] =useState([]);

    useEffect( ()=>{
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [])
    return (
        <div>
            <div>
                <h2 className="text-3xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore Thousand of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid lg:grid-cols-2">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;