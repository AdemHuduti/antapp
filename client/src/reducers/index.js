import { combineReducers } from 'redux';
import workingHours from './workingHours_reducer';
import errorReducer from './error_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  workingHours: workingHours,
  error: errorReducer,
  auth: authReducer
  // state: (state = {}) => state
});

export default rootReducer;