import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENDPOINTS } from '../../constants/api_endpoints';

export const fetchUsers = createAsyncThunk("users/fetchusers", async(arg, thunkAPI) => {
    try {
        const resp = await axios.get(ENDPOINTS.users);
        //console.log(resp.data, "users");
        return resp.data;
        
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});