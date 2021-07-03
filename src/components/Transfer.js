import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./ui/Header";
import {deductAmount} from '../store/actions'

const Transfer = () => {
  const dispatch = useDispatch()
  const accountNumber = useSelector((state) => state.customer.account);
  const balance = useSelector((state) => state.customer.balance);
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(false);
  const [receiverNumber, setReceiverNumber] = useState('');
  const [balanceInput, setBalanceInput] = useState('');
  const commentRef = useRef();

  const onAccountNumber = (e) => {
    setSuccess(null)
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value)) {
      setReceiverNumber(e.target.value);
    }
  };

  const onBalance = (e) => {
    const re = /^[0-9\b]+$/;
    if (re.test(e.target.value)) {
      setBalanceInput(e.target.value);
    }
    
  };

  const onSubmit = async () => {
    // let comment = commentRef.current.value
    if (balanceInput > balance ) {
      setError("You do not have sufficient balance");
      return;
    } 
    else if (balanceInput === "") {
      setError("Please provide the amount to be transferred");
      return;
    } else if (receiverNumber === "" || receiverNumber === accountNumber) {
      setError("Please provide valid Receiver Account Number");
      return;
    }
    const response = await fetch("http://localhost:3001/accounts");
    const responseData = await response.json();
    let custIndex = responseData.findIndex((x) => x.account_number === receiverNumber);
    if (custIndex === -1) {
      setError("Receciver Account Number does not exist");
      return;
    } 
    dispatch(deductAmount(balanceInput))
    setSuccess('Money Transferred Successfully!')
    clearData()
  };

  const clearData = ()=>{
    setReceiverNumber('')
    setBalanceInput('')
    setError(null)
    commentRef.current.value = ''
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex">
          <div className="col-md-6 mx-auto py-5">
            <h3>Transfer money to another account</h3>
            <div className="card-body py-5">
              <div className="mb-3">
                <p> Sender account number: {accountNumber}</p>
                <p> Sender account balance: {balance}</p>
                <label htmlFor="custid" className="form-label">
                  Receivers Bank Account number
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="custid"
                  placeholder="xxxxxxxxxxxxxxxxx"
                  autoComplete="off"
                  onChange={onAccountNumber}
                  value={receiverNumber}
                />
              </div>
              <div className="mb-3">
              
                <label htmlFor="custid" className="form-label">
                  Balance to be transferred
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="custid"
                  placeholder="Add amount"
                  autoComplete="off"
                  onChange={onBalance}
                  value={balanceInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Comments
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="custid"
                  placeholder="Add Comment"
                  autoComplete="off"
                  ref={commentRef}
                />
              </div>
              <div className="mb-3">
                {error && <span className="text-danger mb-2">{error}</span>}
                {success && <span className="text-success mb-2">{success}</span>}
                <button className="btn btn-dark w-100 mt-2" onClick={onSubmit}>
                Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
