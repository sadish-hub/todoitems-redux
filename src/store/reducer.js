import { combineReducers } from "redux";
import todoReducer from "./features/todosSlice";
import filterReducer from "./features/filtersSlice";

// Use the initialState as a default value
const rootReducer = combineReducers(
    {
        todos: todoReducer,
        filters: filterReducer,
    }
);
export default rootReducer;