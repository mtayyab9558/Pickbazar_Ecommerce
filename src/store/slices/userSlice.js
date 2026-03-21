import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunk/usersThunk.js';

const usersSlice = createSlice({
    name: 'users',
  initialState: {
    users: [],
    loader: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loader = false;
        state.users = action.payload;
    })

    builder.addCase(fetchUsers.pending, (state, action) => {
        state.loader = true;
    })

    builder.addCase(fetchUsers.rejected, (state, action) => {})
  }
})

export const { } = usersSlice.actions;
export default usersSlice.reducer;