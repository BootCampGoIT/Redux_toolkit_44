import { ADDTASK } from "../tasks/tasksActions";

const userReducer = (state = { name: "Alex", age: 20 }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
