import { createAction } from "@reduxjs/toolkit";
import { CHANGE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, RESET } from "./constants";

export const changeProducts = createAction(CHANGE_PRODUCTS);
export const addToCart = createAction(ADD_TO_CART);
export const removeFromCart = createAction(REMOVE_FROM_CART);
export const reset = createAction(RESET);

// export const changeProducts =(category) => {
//     return {
//         type: 'CHANGE_PRODUCTS',
//         payload: category,
//     }
// }

// export const addToCart = (product) => {
//     return {
//         type: 'ADD_TO_CART',
//         payload: product,
//     }
// }

// export const removeFromCart = (product) => {
//     return {
//         type: 'REMOVE_FROM_CART',
//         payload: product,
//     }
// }

// export const reset = () => {
//     return {
//         type: 'RESET',
//         payload: {}
//     }
// }