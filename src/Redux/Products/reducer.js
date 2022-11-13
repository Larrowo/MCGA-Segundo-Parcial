import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_ERROR,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_LOADING,
  EDIT_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_ERROR,
} from "./types";

const INITIAL_STATE_VALUE = {
  products: [],
  isLoading: false,
  error: false,
  message: "",
  product: undefined,
};

const productsReducer = (state = INITIAL_STATE_VALUE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        message: "Loading...",
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        message: action.payload,
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload,
      };
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case EDIT_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: false,
        message: "Loading...",
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        message: action.payload,
      };
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload,
      };
    case DELETE_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        products: [
          ...state.list.filter((product) => product._id !== action.payload),
        ],
        message: "Project deleted Successfully",
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
