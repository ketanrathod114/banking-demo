import { useSelector } from "react-redux";
import Header from "./Header";

const Dashboard = () => {
  const customerData = useSelector((state) => state.customer);
  let renderCustomer = (
    <div className="card">
      <div className="card-header">
        <h1 className="fw-light">Welcome {customerData.name}</h1>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h5>Account Number:</h5> {customerData.account}
        </li>
        <li className="list-group-item">
          <h5>Account Balance:</h5> {customerData.balance}
        </li>
        <li className="list-group-item">
          <h5>Account Branch:</h5> {customerData.branch}
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <Header />
      <div className="container py-3">
        {customerData.name && renderCustomer}
      </div>
    </>
  );
};

export default Dashboard;
