import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../types";
import { cartInitialState } from "./cart-initial-state";



export const cartReducer = (state = cartInitialState, action) => {

  const indexOfProduct = (id) => {
    return state
      .map((product, index) => (product.id == id ? index : -1))
      .filter((index) => index !== -1)[0];
  };

  switch (action.type) {
    case ADD_TO_CART:
      if (action.count !== 0) {
        state[indexOfProduct(action.id)] = {
          "id": action.id,
          "count": action.count + 1,
        };
        return [...state];
      } else {
        return [...state, {"id": action.id, "count": action.count+1}]
      }
      break;
    case REMOVE_FROM_CART:
        if(action.count===1){
         return [...state.filter(product=> product.id !== action.id)]
        } else if(action.count>1) {
          state.splice(indexOfProduct(action.id), 1, {"id": action.id, "count": action.count - 1});
        }
        return [...state];
        break;
      case CLEAR_CART:
        return [];
        break;
  }
};
