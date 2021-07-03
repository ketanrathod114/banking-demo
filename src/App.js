import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Transfer from "./components/Transfer";
import Transactions from "./components/transactions/Transactions";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <Switch>
      {!isLoggedIn && (
        <Route path="/">
          <Login />
        </Route>
      )}
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/transfer" exact>
        <Transfer />
      </Route>
      <Route path="/transactions" exact>
        <Transactions />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
