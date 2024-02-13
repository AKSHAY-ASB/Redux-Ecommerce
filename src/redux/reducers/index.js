import { combineReducers } from "redux";
import { productReducers, selectedProductReducers } from "./productReducers";

const reducers = combineReducers({
    allProducts:productReducers,
    product:selectedProductReducers
})

export default reducers;


