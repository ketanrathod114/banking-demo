import { useSelector } from "react-redux";

const UserInfo = () => {
  const customerData = useSelector((state) => state.customer);
  return (
    <div >

        <h1 className="fw-light mt-5">Welcome {customerData.name}</h1>

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex">
          <h5 className="me-3">Account Number: </h5> {customerData.account}
        </li>
        <li className="list-group-item  d-flex">
          <h5 className="me-3">Account Balance: </h5> {customerData.balance}
        </li>
        <li className="list-group-item  d-flex">
          <h5 className="me-3">Account Branch: </h5> {customerData.branch}
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
