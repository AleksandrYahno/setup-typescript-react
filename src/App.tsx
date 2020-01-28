import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { appConstants } from './_constants';
import Form from './modules/Auth/Form/Form';
import Layout from './modules/Layout/Layout';
import ProtectedRoute from './ProtectedRoute';

import { selectTest, actionCreators } from './action/widgets';

import 'antd/dist/antd.css';
import { useActions } from './shared/hooks';

const App: React.FC = () => {
  useEffect(() => {
    console.log('check isAuth');
  }, []);

  const { testAction, testAction1 } = useActions(actionCreators);

  const counter = useSelector(selectTest);

  return (
    <Router>
      {counter.test}
      <button onClick={() => testAction(true)}>+</button>
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
        <ProtectedRoute path={appConstants.LOGIN_PAGE} component={Form} />
        <Route path={appConstants.HOME_PAGE}>
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
