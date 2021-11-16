export const ADDTASK = "-=tasks/addTask=-";
export const DELETETASK = "-=tasks/deleteTask=-";
export const SETLOADER = "-=tasks/setLoader=-";
export const GETTASKS = "tasks/getTasks";

export const getTasks = (tasks) => ({
  type: GETTASKS,
  payload: tasks,
});

export const addTask = (task) => ({
  type: ADDTASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETETASK,
  payload: id,
});

export const setLoader = () => ({
  type: SETLOADER,
});
