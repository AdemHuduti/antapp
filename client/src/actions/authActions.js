import axios from 'axios';
import { getErrors } from "./errorActions";

import {
  USER_LOADED, USER_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL
} from './types';

const API_USER_URL = '/api/auth/user';
const API_USERS = '/api/users';
const API_AUTH = '/api/auth';

// Check token & load user
export const loadUser = () => dispatch => {
  dispatch({ type: USER_LOADING });

  axios.get(API_USER_URL, tokenConfig())
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status))
    });
};

// Register new user
export const registerUser = ({ name, email, password }) => dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Send a body
  const body = JSON.stringify({ name, email, password });

  axios
    .post(API_USERS, body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        getErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post(API_AUTH, body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        getErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};


// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Set config
export function tokenConfig() {
  const token = localStorage.getItem('token')

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
}