import React from 'react'
import { BrowserRouter as Router, Routes as RRoutes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { useSelector } from 'react-redux'
import HomeSO from '../pages/HomeSO'
const Routes = () => {
    const user  = useSelector(state => state.user);
    console.log(user)
    return (
        <div style={{
            backgroundColor: '#28282B',
            height: '100vh',
            width: '100%',
        }}>
            <div className='routes-container'>
                <Router>
                    <RRoutes >
                        <Route exact path="/" element={user.currentUser ? <Home /> : <HomeSO />} />
                    </RRoutes>
                </Router>
            </div>
        </div>
    )
}

export default Routes