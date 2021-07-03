import { useDispatch } from "react-redux";
import { logout } from "../store/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(logout());
  };
  return (
    <div className="contaianer text-center">
      <h1>Dashboard</h1>
      <button className="btn btn-dark" onClick={onSubmit}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
