import React from 'react'
import { BrowserRouter as Router, Routes as RRoutes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import { useAuth } from '../features/auth/AuthContext'
import HomeSO from '../pages/HomeSO'
import NavBar from '../components/Navbar'
const Routes = () => {
    const { auth, user } = useAuth()
    return (
        <div style={{
            backgroundColor: '#28282B',
            height: '100vh',
            width: '100%',
        }}>
            <div className='routes-container'>
                <Router>
                    <RRoutes >
                        <Route exact path="/" element={!user ? <Home /> : <HomeSO />} />
                    </RRoutes>
                </Router>
            </div>
        </div>
    )
}

export default Routes