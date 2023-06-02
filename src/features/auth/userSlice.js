import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut as fbsignOut } from 'firebase/auth';
import { auth } from '../../features/auth/FirebaseConfig';

const initialState = {
    currentUser: null,
    status: 'idle',
    error: null,
};


export const signInAsync = createAsyncThunk(
    'user/signIn',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // Sign in with Firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Return the user ID as the result
            return userCredential.user.uid;
        } catch (error) {
            // Reject the promise with the error details
            return rejectWithValue(error.message);
        }
    }
);

export const signOutAsync = createAsyncThunk(
    'user/signOut',
    async (_, { rejectWithValue }) => {
        try {
            // Sign out with Firebase
            await fbsignOut(auth);
            // Return undefined as the result
            return undefined;
        } catch (error) {
            // Reject the promise with the error details
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signInAsync.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.status = 'succeeded';
            })
            .addCase(signInAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(signOutAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signOutAsync.fulfilled, (state) => {
                state.currentUser = null;
                state.status = 'idle';
            })
            .addCase(signOutAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

    },
});

export default userSlice.reducer;
