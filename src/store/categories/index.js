import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        activeCategory: ''
    },
    reducers: {
        setCategory: (state, action) => {
            return {...state, activeCategory: action.payload}
        },
        setInitialCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
});

export const getCategories = () => async (dispatch, getState) => {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(setInitialCategories(response.data.results));
}

export const { setCategory, setInitialCategories } = categorySlice.actions;
export default categorySlice.reducer;







// let initialState = {
//     categories: [
//         { name: 'electronics', displayName: 'Electronics' },
//         { name: 'food', displayName: 'Food' },
//         { name: 'clothing', displayName: 'Clothing' },
//     ],
//     activeCategory: '',
// };

// function categoriesReducer(state = initialState, action) {
//     switch(action.type) {
//         case 'CHANGE_PRODUCTS':
//             return {
//                 ...state,
//                 activeCategory: action.payload,
//             }
//             case 'RESET':
//                 return initialState;
//                 default:
//                     return state;
//     }
// }

// export default categoriesReducer;