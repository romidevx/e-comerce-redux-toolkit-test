import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')): [],
};

export const cartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.cart.push(action.payload);
            localStorage.setItem('cart', JSON.stringify([...state.cart]))
            console.log('cart slice to add: ' + action.payload);
        }, 

        deleteProductFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify([...state.cart]));
        },

        decreaseProductQuantity: (state, action) => {
            let itemIndex = state.cart.findIndex(itemToDecrease => itemToDecrease.id === action.payload);
            state.cart[itemIndex].quantity -= 1;
            if(state.cart[itemIndex].quantity < 1){
                state.cart[itemIndex].quantity = 1;
            }
            localStorage.setItem('cart', JSON.stringify([...state.cart]))
        },

        increaseProductQuantity: (state, action) => {
            let itemIndex = state.cart.findIndex(itemToIncrease => itemToIncrease.id === action.payload);
            state.cart[itemIndex].quantity += 1;
            localStorage.setItem('cart', JSON.stringify([...state.cart]));
        },
        
        checkOutCart:(state) => {
            state.cart = [];
        }

    }
});

// CART ACTIONS 
export const { addProductToCart, checkOutCart, deleteProductFromCart, decreaseProductQuantity, increaseProductQuantity } = cartSlice.actions;

// CART COUNT
export const cartCount = (state) =>  state.cart.cart.length;

// CART TOTAL AMOUNT $$
export const cartTotal = (state) =>  state.cart.cart.reduce((acc,itemValue) => acc + (itemValue.quantity * itemValue.price),0);

export default cartSlice.reducer;