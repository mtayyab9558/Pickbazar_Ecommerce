import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;

            const existingProduct = state.products.find((product) => product.id === payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({...payload, quantity: 1});
                console.log(payload);
            }  
        },
        increaseQuantity: (state, action) => {
            const { payload } = action;
            const product = state.products.find((product) => product.id === payload.id);
            if (product) {
                product.quantity += 1;
            }    
        },
        decreaseQuantity: (state, action) => {
            const { payload } = action;
            const product = state.products.find((product) => product.id === payload.id);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            } else if (product && product.quantity === 1) {
                state.products = state.products.filter((p) => p.id !== payload.id);
            } 
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.products = state.products.filter((product) => product.id !== productId);
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = productSlice.actions;

export default productSlice.reducer;