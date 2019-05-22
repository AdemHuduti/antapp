import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();