import { createSelector } from "@reduxjs/toolkit";

const itemsSelector = (state) => state.groups.items;
const filterSelector = (state) => state.groups.filter;

export const getGroups = createSelector(
  [itemsSelector, filterSelector],
  (items, filter) => {
    // for (let i = 0; i < 10000000000; i += 1) {}
    return items.filter((group) =>
      group.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const getGroups = (state) => {
//   // for (let i = 0; i < 10000000000; i += 1) {}
//   return state.groups.items.filter((group) =>
//     group.name.toLowerCase().includes(state.groups.filter.toLowerCase())
//   );
// };

// const getSum = (a, b) => {
//   // for (let i = 0; i < 10000000000; i += 1) {}
//   return a + b; //5
// };
// getSum(2, 3);
// getSum(2, 3);
