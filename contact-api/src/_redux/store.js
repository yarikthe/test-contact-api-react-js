import {combineReducers, createStore} from "redux";

import reducerUsers from "./reducer/contact";


let reducers = combineReducers({
    usersList: reducerUsers
})

let store = createStore(reducers);

export default store;