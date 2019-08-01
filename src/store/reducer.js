const initialState = {
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: action.data
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
