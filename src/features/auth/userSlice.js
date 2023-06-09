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
      if (!action.payload) {
        localStorage.removeItem('accessToken');
        state.accessToken = null;
        return;
      }
      localStorage.setItem('accessToken', action.payload);
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      if (!action.payload) {
        localStorage.removeItem('refreshToken');
        state.refreshToken = null;
        return;
      }
      localStorage.setItem('refreshToken', action.payload);
      state.refreshToken = action.payload;
    },
    setExpiredTime: (state, action) => {
      if (!action.payload) {
        localStorage.removeItem('expiredTime');
        state.expiredTime = null;
        return;
      }
      localStorage.setItem('expiredTime', action.payload);
      state.expiredTime = action.payload;
    }
  },
});

export const { setAccessToken, setRefreshToken,setExpiredTime } = userSlice.actions;

export default userSlice.reducer;
