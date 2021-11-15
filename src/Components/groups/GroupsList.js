import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteGroupActionCreator } from "../../redux/groups/groupsActions";

const GroupsList = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) =>
    state.groups.items.filter((group) =>
      group.name.toLowerCase().includes(state.groups.filter.toLowerCase())
    )
  );
  return (
    <ul>
      {groups.map((group) => (
        <li key={group.id}>
          <p>
            {group.name} - {group.count}
          </p>
          <button
            type='button'
            onClick={() => dispatch(deleteGroupActionCreator(group.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GroupsList;

// =================

// import React from "react";
// import { connect } from "react-redux";
// import { deleteGroupActionCreator } from "../../redux/groups/groupsActions";

// const GroupsList = ({ groups, onDelete }) => {
//   return (
//     <ul>
//       {groups.map((group) => (
//         <li key={group.id}>
//           <p>
//             {group.name} - {group.count}
//           </p>
//           <button type='button' onClick={() => onDelete(group.id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     groups: state.groups.items.filter(group=>group.name.toLowerCase().includes(state.groups.filter.toLowerCase())),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDelete: (id) => dispatch(deleteGroupActionCreator(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
