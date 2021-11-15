export const ADDTASK = "-=tasks/addTask=-";
export const DELETETASK = "-=tasks/deleteTask=-";


export const addTask = (task) => ({
    type: ADDTASK,
    payload: task
})

export const deleteTask = (id) => ({
    type: DELETETASK,
    payload: id
})

// const addTasksActionCreator = (task) => {
//     return {
//       type: ADDTASK,
//       payload: task,
//     };
//   };