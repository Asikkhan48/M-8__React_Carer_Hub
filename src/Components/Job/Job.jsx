
const Job = ({job}) => {

    const {logo, id, job_title, company_name, location, job_type, salary, job_description, job_responsibility, address} = job;

    return (
        <div className="text-center m-5 p-4 border-2 space-y-4 rounded-lg shadow-md">
            <img src={logo} alt="" />
            <h1>{job_title}</h1>
            <p>{company_name}</p>
            <p>{location}</p>
            <p>{salary}</p>
            <p>{job_description}</p>
            <p>{job_responsibility}</p>
            <p>{address}</p>
            <button>See more</button>
        </div>
    );
};

export default Job;