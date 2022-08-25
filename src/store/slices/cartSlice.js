import { createSlice } from '@reduxjs/toolkit';

const calculatedTotal = (cartItems) => {
    let total = cartItems.reduce((acc,item) => acc + (item.price * item.quantity),0)
    return total;
}

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')): [],
  cartCount:null,
  cartTotal:0
};

export const cartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.cart.push(action.payload)
            state.cartCount = state.cartCount + 1
            state.cartTotal = calculatedTotal(state.cart)

            localStorage.setItem('cart', JSON.stringify([...state.cart]));
            console.log('cart item to add: ', action.payload);
            console.log('cart info: ', {
                cartItem:    state.cart.map(eachItem => eachItem),
                totalItems:  state.cartCount,
                total:       state.cartTotal
                
            });
        }, 

        deleteProductFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
            state.cartCount = state.cartCount - 1
            state.cartTotal = calculatedTotal(state.cart)

            localStorage.setItem('cart', JSON.stringify([...state.cart]));
            console.log('cart item id to delete: ', action.payload);
            console.log('cart info: ', {
                cartItem:    state.cart.map(eachItem => eachItem),
                totalItems:  state.cartCount,
                total:       state.cartTotal
                
            });
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
            state.cart = []
            state.cartCount = null
            state.cartTotal = 0
            localStorage.setItem('cart', JSON.stringify([]))
        }

    }
});

// CART ACTIONS 
export const { addProductToCart, checkOutCart, deleteProductFromCart, decreaseProductQuantity, increaseProductQuantity } = cartSlice.actions;

export default cartSlice.reducer;