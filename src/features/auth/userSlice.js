// userSlice.js

import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: {
//local Storage
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    expiredTime: localStorage.getItem('expiredTime'),
  },
  reducers: {
    setAccessToken: (state, action) => {
      localStorage.setItem('accessToken', action.payload);
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      localStorage.setItem('refreshToken', action.payload);
      state.refreshToken = action.payload;
    },
    setExpiredTime: (state, action) => {
      localStorage.setItem('expiredTime', action.payload);
      state.expiredTime = action.payload;
    }
  },
});

export const { setAccessToken, setRefreshToken,setExpiredTime } = userSlice.actions;

export default userSlice.reducer;
