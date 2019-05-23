import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Login from './components/userComponents/Login';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/" exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();