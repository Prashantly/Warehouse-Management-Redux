import { createStore, combineReducers } from "redux";
import { warehouseReducer } from "./states/reducers";


const rootReducer = combineReducers({
    warehouses: warehouseReducer,
})


const store = createStore(rootReducer)

export default store;



