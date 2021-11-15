import React from "react";
import { connect } from "react-redux";
import { setFilterActionCreator } from "../../redux/groups/groupsActions";

const Filter = ({ filter, onHandleChange }) => {
  return (
    <label>
      Filter
      <input
        type='text'
        value={filter}
        onChange={(e) => onHandleChange(e.target.value)}
      />
    </label>
  );
};
const mapStateToProps = (state) => {
  return {
    filter: state.groups.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleChange: (value) => dispatch(setFilterActionCreator(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
