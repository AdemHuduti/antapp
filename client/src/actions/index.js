import axios from 'axios';
import { tokenConfig } from './authActions';
import { getErrors } from './errorActions';

import { GET_WORKING_HOURS, CREATE_WORKING_HOURS, DELETE_WORKING_HOURS } from "./types";

const API_BASE_URL = '/api/workinghours/';

export const fetchWorkingItems = () => dispatch => {
  axios.get(API_BASE_URL)
    .then(res => dispatch({
      type: GET_WORKING_HOURS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
    });
}

export const createNewWorkingItem = workingItem => dispatch => {
  axios.post(API_BASE_URL, workingItem, tokenConfig())
    .then(res => dispatch({
      type: CREATE_WORKING_HOURS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
    });
};

export const deleteWorkingItem = id => dispatch => {
  axios.delete(`${API_BASE_URL}${id}`, tokenConfig())
    .then(res => dispatch({
      type: DELETE_WORKING_HOURS,
      payload: id
    }))
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
    });
};
