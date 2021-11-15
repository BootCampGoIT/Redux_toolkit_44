import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { deleteTask } from "../../redux/tasks/tasksActions";

const TasksList = ({ tasks, user, deleteTaskItem }) => {
  // const dispatch = useDispatch();
  // const tasks = useSelector((state) => state.tasks);
  // const user = useSelector((state) => state.user);
  // console.log(user);
  return (
    <ul className='tasksList'>
      {tasks.map((task) => (
        <li key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          {/* <button type='button' onClick={() => dispatch(deleteTask(task.id))}>
            Delete
          </button> */}
          <button type='button' onClick={() => deleteTaskItem(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// const tasks = useSelector((state) => state.tasks);

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  user: state.user,
});

// const mapDispatchToProps = { deleteTaskItem: deleteTask };

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTaskItem: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);

// const connect2 = () => (WrappedComponent) =>{
// const [state, setState] = useState({})
//   return (
//     <>
//       <WrappedComponent state={state}/>
//     </>
//   );
// }

// import store from "store"

// const connect = (arg1, arg2) => (WrappedComponent) =>{
//   const props = {...arg1(store.getState()), ...arg2(store.dispatch)};

//   return (<WrappedComponent {...props}/>)
// }
