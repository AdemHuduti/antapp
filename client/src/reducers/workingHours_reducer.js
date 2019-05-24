import { GET_WORKING_HOURS, CREATE_WORKING_HOURS, DELETE_WORKING_HOURS } from "../actions/types";

const initialState = {
  workingHours: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORKING_HOURS:
      return {
        ...state,
        workingHours: action.payload
      }

    case CREATE_WORKING_HOURS:
      return {
        ...state,
        workingHours: [action.payload, ...state.workingHours]
      }

    case DELETE_WORKING_HOURS:
      return {
        ...state,
        workingHours: state.workingHours.filter(workingHour => workingHour._id !== action.payload)
      }

    default: return state
  }
}