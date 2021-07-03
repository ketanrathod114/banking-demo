const SingleTransaction = (props) => {
  return (
    <li key={props.id} className="list-group-item">
      From: {props.from}, To: {props.to}, ,Amount: {props.amount}
    </li>
  );
};

export default SingleTransaction;
