import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-6 p-6">
            <h4>Opps!</h4>
            <NavLink to="/"><button className="btn btn-link">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;