import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cart/cart-reducer";
import { cartInitialState } from "./cart/cart-initial-state";

const StoreContext= createContext();

export const useStore= () => useContext(StoreContext);

export const StoreProvider= ({children}) => {

  const [cartState, dispatchCart]= useReducer(cartReducer, cartInitialState);

  return (
    <StoreContext.Provider value={ {cartState, dispatchCart} }>
      {children}
    </StoreContext.Provider>
  )
}