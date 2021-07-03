import { useDispatch } from "react-redux";
import { logout } from "../../store/actions";

const Header = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-dark bg-dark text-white">
      <div className="container">
        XYZ bank
        <button className="btn btn-light" onClick={onSubmit}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
