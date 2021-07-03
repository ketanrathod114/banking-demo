import { useState } from "react";
import { useDispatch } from "react-redux";
import { doLogin } from "../../store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [customerID, setCustomerID] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(true)


  const onCustomerInput = (e) => {
    const re = /^[0-9\b]+$/;
     if(re.test(e.target.value)){
      setCustomerID(e.target.value);
    }
    
  }

  
  const onPasswordInput = (e) => {
    setPassword(e.target.value);
  }



  const onSubmit = async () => {
    if(customerID === '' || customerID.length<6){
      setError('Enter Valid Customer ID');
      return
    } else if(password === ''){
      setError('Password Field cannot be Empty')
      return
    }
    const response = await fetch("http://localhost:3001/customers");
    const responseData = await response.json();
    let custIndex = responseData.findIndex((x) => x.customer_id === customerID)
    if(custIndex===-1){
      setError('Customer ID is Not valid')
      return
    } else if(responseData[custIndex].password !== password) {
      setError('Please enter valid credentials')
      return
    }
    console.log('dispatching')
     dispatch(doLogin())
  };
  return (
    <div className="login-wrapper contiainer-fluid pt-5 bg-light">
      <div className="col-lg-8 col-md-10 mx-auto card shadow p-0 mb-5 bg-body border-0 rounded">
        <div className="d-flex">
          <div className="col-sm-5 bg-dark rounded d-flex justify-content-center p-5">
            <div className="text-white align-self-center ">
              <h1 className="fw-light">Login</h1>
              <h5 className="fw-light fst-italic">with your Customer ID<b/> and Password</h5>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="custid" className="form-label">
                  Customer Id
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="custid"
                  placeholder="xxxxxx"
                  onChange={onCustomerInput}
                  value={customerID}
                  autoComplete="off"
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
                  onChange={onPasswordInput}
                  value={password}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
              {error && <span className="text-danger mb-2">{error}</span>}
                <button className="btn btn-dark w-100 mt-2" onClick={onSubmit}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card-footer text-muted">Kindly login to proceed</div> */}
      </div>
    </div>
  );
};

export default Login;
