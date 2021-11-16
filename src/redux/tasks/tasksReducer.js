import { combineReducers } from "redux";
import { ADDTASK, DELETETASK, GETTASKS, SETLOADER } from "./tasksActions";

const items = (state = [], action) => {
  switch (action.type) {
    case GETTASKS:
      return action.payload;
    case ADDTASK:
      return [...state, action.payload];
    case DELETETASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case SETLOADER:
      return !state;
    default:
      return state;
  }
};

const tasksReducer = combineReducers({
  items,
  isLoading,
});

export default tasksReducer;
