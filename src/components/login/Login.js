import { useDispatch } from "react-redux";
import { doLogin } from "../../store/actions";


const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(doLogin());
  }
  return (

    <div className="col-md-5 mx-auto mt-5">
      <div className="card text-center">
        <div className="card-header">Login</div>
        <div className="card-body">
          <div className="mb-3 row">
            <label htmlFor="custid" className="col-sm-2 col-form-label">
              Customer Id
            </label>
            <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="custid"
              placeholder="xxxxxx"
            />
          </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <button className="btn btn-dark" onClick={onSubmit}>
            Login
          </button>
        </div>
        {/* <div className="card-footer text-muted">Kindly login to proceed</div> */}
      </div>
    </div>
  );
};

export default Login;
