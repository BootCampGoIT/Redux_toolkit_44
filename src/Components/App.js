import React from "react";
import AuthForm from "./auth/AuthForm";
import Filter from "./groups/Filter";
import GroupsForm from "./groups/GroupsForm";
import GroupsList from "./groups/GroupsList";
import TasksForm from "./tasks/TasksForm";
import TasksList from "./tasks/TasksList";

const App = () => {
  return (
    <>
      {/* <AuthForm /> */}
      {/* <TasksForm />
      <TasksList /> */}
      <GroupsForm />
      <hr />
      <Filter />
      <GroupsList />
    </>
  );
};

export default App;

// const groups = {
//   items: [],
//   filter: ""
// }
