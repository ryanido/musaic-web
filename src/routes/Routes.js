import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HomeSO from '../pages/HomeSO';
import { useSelector, useDispatch } from 'react-redux';
import { setAccessToken, setProfile } from '../features/auth/userSlice';
import { getUserProfile } from '../features/auth/spotify'
const AppRoutes = () => {

    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.accessToken);
  
    useEffect(() => {
      const handleAuthentication = async () => {
        // 1. Parse the URL to get the access token
        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        const token = urlParams.get('access_token');
    
        if (token) {
          // 2. Set the access token in the Redux store
          dispatch(setAccessToken(token));
    
          try {
            // 3. Get user profile information
            const profile = await getUserProfile(token);
    
            // 4. Set the profile in the Redux store
            dispatch(setProfile(profile));
          } catch (error) {
            console.error('Failed to fetch user profile:', error);
          }
        }
      };
    
      handleAuthentication();
    }, [dispatch]);

    return (
        <div style={{ backgroundColor: '#28282B', height: '100vh', width: '100%' }}>
            <div className='routes-container'>
                <Router>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={accessToken ? <Home /> : <HomeSO />}
                        />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default AppRoutes;
