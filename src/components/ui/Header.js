import { useDispatch } from "react-redux";
import { logout } from "../../store/actions";
import { NavLink } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-dark list-group-horizontal bg-dark text-white">
      <div className="container">
        <div className="d-flex">
          <NavLink className="nav-link mr-3" exact to="/">
            Dashboard
          </NavLink>

          <NavLink className="nav-link ml-3 " to="/transfer">
            Transfer
          </NavLink>
          <NavLink className="nav-link ml-3 " to="/transactions">
            Transactions
          </NavLink>
        </div>
        <div className="d-flex">
          <button className="btn btn-outline-danger" onClick={onSubmit}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
