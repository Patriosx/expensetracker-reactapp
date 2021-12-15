// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  //dispatch = action
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
