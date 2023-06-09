import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HomeSO from '../pages/HomeSO';
import { useSelector } from 'react-redux';
import AlbumListPage from '../features/albums/AlbumListPage';
import { useGetNewReleasesQuery, useGetTopChartsQuery } from '../features/api/spotifyApiSlice';
import { useSpotifyAuth } from '../features/auth/useSpotifyAuth';
import NavBar from '../components/Navbar';
import AlbumPage from '../features/albums/AlbumPage';

const AppRoutes = () => {
    const accessToken = useSelector((state) => state.user.accessToken);
    useSpotifyAuth();

    return (
        <div style={{ backgroundColor: '#28282B', height: '100vh', width: '100%' }}>
            <div className="routes-container">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={accessToken ? <Home /> : <HomeSO />}
                        />
                        {/* <Route
                            path="/albums/new-releases"
                            element={<AlbumListPage albumQuery={useGetNewReleasesQuery} />}
                        /> */}
                        {/* <Route 
                            path="/albums/new-releases/page/:page"
                            element={<AlbumListPage albumQuery={useGetNewReleasesQuery} />}
                        /> */}

                        {/* <Route
                            path="/albums/popular"
                            element={<AlbumListPage albumQuery={useGetTopChartsQuery} />}
                        /> */}
                        {/* <Route 
                            path="/albums/popular/page/:page"
                            element={<AlbumListPage albumQuery={useGetTopChartsQuery} />}
                        /> */}
                        <Route
                            path="/albums"
                            element={<AlbumListPage albumQuery={useGetTopChartsQuery} />}
                        />
                        <Route
                            path="/album/:albumId"
                            element={<AlbumPage/>}
                        />
                        {/* <Route
                            path="/albums/page/:page"
                            element={<AlbumListPage albumQuery={useGetTopChartsQuery} />}
                        /> */}
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default AppRoutes;
