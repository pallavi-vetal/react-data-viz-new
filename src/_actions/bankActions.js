import { FETCH_BANK_DETAILS } from '../_constants/bankConst';
import axios from "axios";

export const setBankDetails = details =>{
    return {
        type: FETCH_BANK_DETAILS,
        payload: details
    };
}


export const fetchBankDetails = () => dispatch => {

    return axios
      .get("http://localhost:3000/bankDetails")
      .then(res => {
        return dispatch(setBankDetails(res.data));
      })
      .catch(err =>
        console.log("Error Occured : ",err)
      );
  };
 