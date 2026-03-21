import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENDPOINTS } from '../../constants/api_endpoints';

export const fetchProducts = createAsyncThunk("products/fetchproducts", async(arg, thunkAPI) => {
    try {
        const resp = await axios.get(ENDPOINTS.products);
        return resp.data;
        
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message || "Something went wrong");
    }
});