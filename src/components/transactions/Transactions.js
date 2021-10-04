import Header from "../ui/Header";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transactions } from "../../store/actions";
// import SingleTransaction from "./SingleTransaction";

const Transactions = () => {
  const [tdta, setData] = useState();
  let list = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3001/transactions")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const transformedData = data.map((item) => {
          return {
            id: item.id,
            from: item.from_account,
            to: item.to_account,
            amount: item.amount,
          };
        });
        setData(transformedData);
        dispatch(transactions(transformedData));
        // console.log('dispatching')
      });
  };
  // fetchData();
  // console.log(list)
  return (
    <>
      <Header />
      <div className="container text-center">
        <h3 className="mt-5 mb-4">List of all the Transactions</h3>
        <ul className="list-group list-group-flush col-md-5 mx-auto text-left">
          {tdta &&
            tdta.map((item) => (
              <li key={item.id} className="list-group-item">
                From: {item.from}, To: {item.to}, ,Amount: {item.amount}
              </li>
              // <SingleTransaction />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Transactions;
