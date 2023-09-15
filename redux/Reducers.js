import {ADD_TO_CART, INCREASE_QTY} from './ActionType';
const InitialState = {
  Arr: [],
};
export const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const ItemInCart = state.Arr.find(item => item.id == action.payload.id);
      if (ItemInCart) {
        ItemInCart.qty++;
      } else
        return { ...state, Arr: state.Arr.concat({...action.payload, qty: 1}), };
    case INCREASE_QTY: {
      let Increase = state.Arr.find(item => item.id == action.payload.id); 
      return {...state, qty: Increase.qty++}; 
    }

    default:
      return state;
  }
};
