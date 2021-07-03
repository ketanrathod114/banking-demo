import Header from "../ui/Header";
import UserInfo from "./UserInfo";

import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="container py-3">
        <UserInfo />
        <div className="mt-2 p-3 pb-0 card">
        <p>Transfer amount to other account  <Link className="btn btn-secondary ms-2" to="/transfer">
            Transfer
          </Link></p>
       
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
