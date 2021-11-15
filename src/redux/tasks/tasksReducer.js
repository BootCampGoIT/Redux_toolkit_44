import { ADDTASK, DELETETASK} from "./tasksActions";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADDTASK:
      return [...state, action.payload];
    case DELETETASK:
      return state.filter(task=>task.id !== action.payload);
    default:
      return state;
  }
};

export default tasksReducer;
