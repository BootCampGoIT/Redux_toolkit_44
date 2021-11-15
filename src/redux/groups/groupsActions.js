import { createAction, nanoid } from "@reduxjs/toolkit";
const addGroupActionCreator = createAction("groups/addGroup", (group) => ({
  payload: {
    ...group,
    id: nanoid(),
  },
}));
const deleteGroupActionCreator = createAction("groups/deleteGroup");
const setFilterActionCreator = createAction("groups/setFilter");

export {
  addGroupActionCreator,
  deleteGroupActionCreator,
  setFilterActionCreator,
};

// ================ redux =====================

// import { v4 as uuidv4 } from "uuid";
// const ADDGROUP = "groups/addGroup";
// const DELETEGROUP = "groups/deleteGroup";
// const SETFILTER = "groups/setFilter";

// export { ADDGROUP, DELETEGROUP, SETFILTER };

// const addGroupActionCreator = (payload) => ({
//   type: ADDGROUP,
//   payload: { ...payload, id: uuidv4() },
// });
// const deleteGroupActionCreator = (payload) => ({ type: DELETEGROUP, payload });
// const setFilterActionCreator = (payload) => ({type: SETFILTER, payload})

// export { addGroupActionCreator, deleteGroupActionCreator, setFilterActionCreator };
