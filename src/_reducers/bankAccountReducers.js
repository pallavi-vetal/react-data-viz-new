import {
    FETCH_BANK_DETAILS
  } from "../_constants/bankConst";
  
  const initialState = {
    details: [],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_BANK_DETAILS:
        return {
          ...state,
          details: action.payload
        };
      
      default:
        return state;
    }
  }
  