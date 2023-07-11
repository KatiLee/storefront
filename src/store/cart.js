import { createReducer } from '@reduxjs/toolkit';
import { ADD_TO_CART, REMOVE_FROM_CART } from '.constants';

let initialState = {
    cart: [],
};

const cartReducer = createReducer (
    initialState,
    {
        [ADD_TO_CART]: (state, action) => {
            return [...state.cart, action.payload];
        },
        [REMOVE_FROM_CART]: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter(item => item.name !== action.payload.name),
            }
        }
    }
);

export default cartReducer;


// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             return {
//                 cart: [...state.cart, action.payload],
//             }
//             case 'REMOVE_FROM_CART':
//                 return {
//                     ...state,
//                     cart: state.cart.filter(item => item.name !== action.payload.name),
//                 }
//                 default:
//                     return state;
//     }
// }