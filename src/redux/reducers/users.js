export default (users = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return action.payload;
    case "CREATE_USER":
      return [...users, action.payload];
    case "UPDATE_USER":
      return users.map((eve) =>
        eve.id === action.payload.id ? action.payload : eve
      );
    case "DELETE_USER":
      return users.filter((eve) => eve.id !== action.payload.id);
    default:
      return users;
  }
};
