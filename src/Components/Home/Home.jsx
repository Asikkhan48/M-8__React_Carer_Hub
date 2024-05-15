import Banner from "../Banner/Banner";
import Catagorylist from "../CatagoryList/Catagorylist";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="text-center mt-6 p-6">
           
            <Banner></Banner>
            <Catagorylist></Catagorylist>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;