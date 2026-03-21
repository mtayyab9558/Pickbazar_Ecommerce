import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from "../../store/thunk/productThunk.js";

const initialState = {
    products: [],
    cartProducts: [],
    loading: false,
    error: null,
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const payload = action.payload;

            const existingProduct = state.cartProducts.find((product) => product.id === payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartProducts.push({...payload, quantity: 1});
            }  
        },
        increaseQuantity: (state, action) => {
            const payload = action.payload;
            const product = state.cartProducts.find((product) => product.id === payload.id);
            if (product) {
                product.quantity += 1;
            }    
        },
        decreaseQuantity: (state, action) => {
            const payload = action.payload;

            const product = state.cartProducts.find((product) => product.id === payload.id);

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            } else if (product && product.quantity === 1) {
                state.cartProducts = state.cartProducts.filter((p) => p.id !== payload.id);
            } 
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cartProducts = state.cartProducts.filter((product) => product.id !== productId);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
        })    

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = productSlice.actions;

export default productSlice.reducer;