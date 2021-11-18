export const getGroups = (state) =>
  state.groups.items.filter((group) =>
    group.name.toLowerCase().includes(state.groups.filter.toLowerCase())
  );
