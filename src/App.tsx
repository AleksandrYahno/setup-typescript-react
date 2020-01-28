import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { appConstants } from './_constants';
import Form from './modules/Auth/Form/Form';
import Layout from './modules/Layout/Layout';

import { selectTest, testAction } from './action/widgets';

import 'antd/dist/antd.css';

const App: React.FC = () => {
  useEffect(() => {
    console.log('check isAuth');
  }, []);

  const dispatch = useDispatch();
  const counter = useSelector(selectTest);

  return (
    <Router>
      {counter.isAuth}
      <button onClick={() => dispatch(testAction(true))}>+</button>
      <nav>
        <ul>
          <li>
            <Link to={appConstants.LOGIN_PAGE}>LOGIN_PAGE</Link>
          </li>
          <li>
            <Link to={appConstants.HOME_PAGE}>HOME_PAGE</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={appConstants.LOGIN_PAGE}>
          <Form />
        </Route>
        <Route path={appConstants.HOME_PAGE}>
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
