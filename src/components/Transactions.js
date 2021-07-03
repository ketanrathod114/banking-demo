import Header from "./ui/Header";
import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { transactions } from "../store/actions";

const Transactions = () => {
  // const [transaction, setTransaction] = useState(null)
  // let list;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/transactions");
      const responseData = await response.json();
      // setTransaction(responseData)
      console.log(responseData);
    };
    fetchData();
    // console.log(transaction)
  }, []);
  return (
    <>
      <Header />
      <div className="container text-center">
        <h3>List of all the Transactions</h3>
      </div>
    </>
  );
};

export default Transactions;
