import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == idInt);
    
    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast("You Applied Successfully")
    }

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border-2 md:col-span-3 m-4 p-4 rounded-lg space-y-2 text-center">
                    <h2 className="text-2xl font-bold"> {job.job_title} </h2>
                    <p>Company Name: {job.company_name}</p>
                    <p>Salary: {job.salary}</p>
                    <p><small>{job.job_description}</small></p>
                </div>
                    <div className="border-2 text-center m-4 p-4 rounded-lg">
                        <h2 className="text-2xl mb-8">Side Things</h2>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;