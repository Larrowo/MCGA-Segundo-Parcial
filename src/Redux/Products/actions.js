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

export const addProductSuccess = (data) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const addProductLoading = () => {
  return {
    type: ADD_PRODUCT_LOADING,
  };
};

export const addProductError = (error) => {
  return {
    type: ADD_PRODUCT_ERROR,
    payload: error,
  };
};

export const editProductSuccess = (data) => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    payload: data,
  };
};
export const editProductLoading = () => {
  return {
    type: EDIT_PRODUCT_LOADING,
  };
};
export const editProductError = (error) => {
  return {
    type: EDIT_PRODUCT_ERROR,
    payload: error,
  };
};
export const deleteProductSuccess = (data) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: data,
  };
};
export const deleteProductLoading = () => {
  return {
    type: DELETE_PRODUCT_LOADING,
  };
};
export const deleteProductError = (error) => {
  return {
    type: DELETE_PRODUCT_ERROR,
    payload: error,
  };
};

export const getProductSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const getProductLoading = (data) => {
  return {
    type: GET_PRODUCTS_LOADING,
  };
};

export const getProductError = (error) => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: error,
  };
};
