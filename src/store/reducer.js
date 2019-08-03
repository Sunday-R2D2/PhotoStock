const initialState = {
  data: null,
  articleID: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: action.data
      };
    case "SEND_ID":
      return {
        ...state,
        articleID: state.data[action.id - 1]
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
