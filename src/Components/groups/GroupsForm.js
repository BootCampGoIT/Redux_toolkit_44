import React, { useState } from "react";
import { connect } from "react-redux";
import { addGroupActionCreator } from "../../redux/groups/groupsActions";

const GroupsForm = ({ addNewGroup }) => {
  const [group, setGroup] = useState({ name: "", count: 0 });
  const onHandleChange = (e) =>
    setGroup((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addNewGroup(group);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Name
        <input
          type='text'
          name='name'
          value={group.name}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Count
        <input
          type='text'
          name='count'
          value={group.count}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Add group</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewGroup: (group) => {
      dispatch(addGroupActionCreator(group));
    },
  };
};

export default connect(null, mapDispatchToProps)(GroupsForm);
