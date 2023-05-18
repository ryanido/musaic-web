// userSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword,signOut as fbsignOut } from 'firebase/auth';
import { auth } from '../../features/auth/FirebaseConfig';


const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
        console.log("action.payload",action.payload)
      state.currentUser = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const signInAsync = (email, password) => async (dispatch) => {
  try {
    // Sign in with Firebase
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    // Dispatch the signIn action with the user data
    dispatch(signIn(userCred.user.uid));
  } catch (error) {
    // Handle sign-in error
    console.error('Sign in error:', error);
  }
};

export const signOutAsync = () => async (dispatch) => {
  try {
    // Sign out with Firebase
    await fbsignOut(auth);

    // Dispatch the signOut action
    dispatch(signOut());
  } catch (error) {
    // Handle sign-out error
    console.error('Sign out error:', error);
  }
};

export default userSlice.reducer;
