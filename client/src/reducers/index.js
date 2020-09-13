import { combineReducers } from "redux";
//for multiple reduers
import alert from "./alert";
import post from "./post";

export default combineReducers({ alert, post });
