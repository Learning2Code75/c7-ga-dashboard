export default (paths = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_PATHS":
      return action.payload;
    case "CREATE_PATH":
      return [...paths, action.payload];
    case "UPDATE_PATH":
      return paths.map((eve) =>
        eve.id === action.payload.id ? action.payload : eve
      );
    case "DELETE_PATH":
      return paths.filter((eve) => eve.id !== action.payload.id);
    default:
      return paths;
  }
};
