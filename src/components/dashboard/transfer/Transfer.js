import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions";

const Transfer = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(logout());
  };
  return (
    <div className="contaianer text-center">
      <h1>Transfer</h1>
      <button className="btn btn-dark" onClick={onSubmit}>
        Logout
      </button>
    </div>
  );
};

export default Transfer;
