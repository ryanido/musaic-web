// hooks/useSpotifyAuth.js
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccessToken, setRefreshToken, setExpiredTime } from './userSlice';
import { useGetAccessTokenMutation, useRefreshTokenMutation } from '../api/spotifyApiSlice';

export const useSpotifyAuth = () => {
    const dispatch = useDispatch();
    const refreshToken = useSelector(state => state.user.refreshToken);
    const expiredTime = useSelector(state => state.user.expiredTime);
    const [getAccessToken] = useGetAccessTokenMutation();
    const [getRefreshToken] = useRefreshTokenMutation();

    useEffect(() => {
        if (refreshToken && new Date().getTime() >= expiredTime) {
            console.log('refreshing token');
            getRefreshToken(refreshToken)
                .unwrap()
                .then((data) => {
                    console.log(data);
                    dispatch(setAccessToken(data.access_token));
                    dispatch(setExpiredTime(data.expires_in * 1000 + new Date().getTime()));
                })
        }
    }, [dispatch, getRefreshToken, refreshToken, expiredTime]);

    useEffect(() => {
        const handleAuthentication = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            window.history.pushState({}, '', '/');
            if (code) {
                getAccessToken(code)
                    .unwrap()
                    .then((data) => {
                        console.log(data);
                        dispatch(setAccessToken(data.access_token));
                        dispatch(setRefreshToken(data.refresh_token));
                        dispatch(setExpiredTime(data.expires_in * 1000 + new Date().getTime()));
                    })
                    .catch((error) => console.error('Failed to get access token: ', error));
            }
        };
        handleAuthentication();
    }, [dispatch, getAccessToken]);
};
