import React, { useState } from "react";
import { addTask } from "../../redux/tasks/tasksActions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTaskOperation } from "../../redux/tasks/tasksOperations";

const initialState = { title: "", description: "" };

const TasksForm = () => {
  const [task, setTask] = useState(initialState);
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addTask({ ...task, id: uuidv4() }));
    //{type: "tasks/addTasks", payload: {...task, id: uuidv4()} }
    dispatch(addTaskOperation(task));
  };
  const onHandleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Title
        <input
          type='text'
          name='title'
          value={task.title}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Description
        <input
          type='text'
          name='description'
          value={task.description}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Add task</button>
    </form>
  );
};

export default TasksForm;
