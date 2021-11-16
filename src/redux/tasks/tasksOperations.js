import axios from "axios";
import { addTask, deleteTask, getTasks, setLoader } from "./tasksActions";

export const getTasksOperation = () => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    const response = await axios.get(
      `https://new44-5ccb0-default-rtdb.firebaseio.com/tasks.json`
    );
    const tasks = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
    dispatch(getTasks(tasks));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoader());
  }
};

export const addTaskOperation = (task) => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    const response = await axios.post(
      `https://new44-5ccb0-default-rtdb.firebaseio.com/tasks.json`,
      task
    );
    dispatch(addTask({ ...task, id: response.data.name }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoader());
  }
};

export const deleteTaskOperation = (id) => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    await axios.delete(
      `https://new44-5ccb0-default-rtdb.firebaseio.com/tasks/${id}.json`
    );
    dispatch(deleteTask(id));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoader());
  }
};
