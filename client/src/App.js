import React, { Component } from 'react';
import Registration from './components/userComponents/Registration';
import NavBar from './components/NavBar';
import { loadUser } from "./actions/authActions";
import store from './store';

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div>
        <NavBar />
        <Registration />
      </div>
    )
  }
}