import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Array to store registered users
  currentUser: null, // Store the logged-in user
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      state.currentUser = user ? user : null;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
