import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data.json';

const initialState = {
  products:[...data],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    filteredProductsLowToHigh: (state) => {
      const filterPricesLowToHigh = state.products.sort((a,b) => a.price - b.price);
      state.products = [...filterPricesLowToHigh];
    },
  
    filteredProductsHighToLow: (state) => {
      const filterPricesHighToLow = state.products.sort((a,b) => b.price - a.price);
      state.products = [...filterPricesHighToLow]
    },

    filteredProductsByScore: (state) => {
      const filterPricesByScore = state.products.sort((a,b) => b.score - a.score);
      state.products = [...filterPricesByScore];
    },

    filteredProductsAlphabetically: (state) => {
      const filterProductsByAlphabetically = state.products.sort((a, b) => (a.name > b.name) ? 1 : -1);
      state.products = [...filterProductsByAlphabetically]
    }
  }
});

export const { filteredProductsLowToHigh, filteredProductsHighToLow, filteredProductsByScore, filteredProductsAlphabetically } = productsSlice.actions;

export default productsSlice.reducer;
