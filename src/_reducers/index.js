import { combineReducers } from "redux";
import bankAccountReducers from './bankAccountReducers';

export default combineReducers({
details : bankAccountReducers,
});
