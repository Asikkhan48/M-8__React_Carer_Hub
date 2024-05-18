import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] =useState([]);
    const [dataLength, setDataLength] =useState(4);

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
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={dataLength === jobs.length && "hidden"}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-active text-center">See all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;