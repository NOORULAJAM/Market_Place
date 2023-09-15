import {ADD_TO_CART, INCREASE_QTY} from './ActionType';

export const AddToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
export const Increase_Qty = (item) => ({
  type: INCREASE_QTY,
  payload: item,
});
