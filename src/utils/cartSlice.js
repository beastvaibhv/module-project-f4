import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (!existingItem) {
                state.cartItems.push(action.payload); // Add item to cart
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        },
        clearCart :(state)=>{
            state.cartItems = [];
        }
    },

});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;