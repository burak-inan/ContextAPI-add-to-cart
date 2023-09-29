import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../types";

export const addToCart= (id, count) => ({type: ADD_TO_CART, id, count});
export const removeFromCart= (id, count) => ({type: REMOVE_FROM_CART, id, count});
export const clearCart= () => ({type: CLEAR_CART});