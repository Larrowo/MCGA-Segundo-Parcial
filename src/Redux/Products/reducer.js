import { ADD_PRODUCT } from "./types";
const INITIAL_STATE_VALUE = {
  products: [],
};

const reducer = (state = INITIAL_STATE_VALUE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
