// userSlice.js

import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: {
//local Storage
    accessToken: localStorage.getItem('accessToken'),
    profile: localStorage.getItem('profile'),
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setAccessToken, setProfile } = userSlice.actions;

export default userSlice.reducer;
