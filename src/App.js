import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Login from './components/login/Login';
import Dashboard from './components/Dashboard';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // console.log(isLoggedIn)
  return (

      <Switch>
      {!isLoggedIn && (
          <Route path='/'>
            <Login />
          </Route>
        )}
        <Route path='/' exact>
          <Dashboard />
        </Route>
        {/* {!isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route> */}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
  );
}

export default App;
