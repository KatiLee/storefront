import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ];

  const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => action.payload,
    }
  });

  export const getProducts = (activeCategory) => async (dispatch) => {
    console.log('this is the active category', activeCategory)
    let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${activeCategory}`);
    dispatch(setProducts(response.data.results));
  }

  export const incrementInventoryRemove = (product) => async (dispatch) => {
    product = {...product, inStock: product.inStock +1};
    console.log('we trying to remove dis', product);
    const res = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
    console.log('did it do the thing?', res.data);
  };

  export const decrementInventory = (product) => async(dispatch) => {
    product = {...product, inStock: product.inStock -1};
    await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
    dispatch(getProducts(product.category));
  };

  export const { addProduct, removeProduct, setProducts } = productSlice.actions
  export default productSlice.reducer;