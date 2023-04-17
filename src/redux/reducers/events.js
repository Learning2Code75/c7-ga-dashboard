export default (events = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_EVENTS":
      return action.payload;
    case "CREATE_EVENT":
      return [...events, action.payload];
    case "UPDATE_EVENT":
      return events.map((eve) =>
        eve.id === action.payload.id ? action.payload : eve
      );
    case "DELETE_EVENT":
      return events.filter((eve) => eve.id !== action.payload.id);
    default:
      return events;
  }
};
