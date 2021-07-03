import { useDispatch } from "react-redux";
import { doLogin } from "../../store/actions";

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = async () => {
      const response = await fetch("http://localhost:3001/customers");
      const responseData = await response.json();
      console.log(responseData)

    dispatch(doLogin());
  };
  return (
    <div className="login-wrapper contiainer-fluid bg-light">
      <div className="col-md-5 mx-auto pt-5">
        <div className="card shadow p-3 mb-5 bg-body border-0 rounded">
          {/* <div className="col-sm-6">

          </div> */}
          {/* <div className="col-sm-6"> */}
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="custid" className="form-label">
                Customer Id
              </label>

              <input
                type="number"
                className="form-control"
                id="custid"
                placeholder="xxxxxx"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-dark w-100" onClick={onSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
        </div>
        {/* <div className="card-footer text-muted">Kindly login to proceed</div> */}
      </div>
    // </div>
  );
};

export default Login;
