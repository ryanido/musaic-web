import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { useSelector } from 'react-redux';
import HomeSO from '../pages/HomeSO';

const AppRoutes = () => {

    const extractAccessToken = () => {
        const params = window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial, item) => {
                if (item) {
                    const parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});
        return params.access_token;
    };

    const token = extractAccessToken();

    console.log(token);

    return (
        <div style={{ backgroundColor: '#28282B', height: '100vh', width: '100%' }}>
            <div className='routes-container'>
                <Router>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={token ? <Home /> : <HomeSO />}
                        />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default AppRoutes;
