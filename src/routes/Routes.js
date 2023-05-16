import React from 'react'
import { BrowserRouter as Router, Routes as RRoutes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import { useAuth } from '../features/auth/AuthContext'
import NavBar from '../components/Navbar'
import HomeSO from '../pages/HomeSO'
const Routes = () => {
    const { auth, user } = useAuth()
    return (
        <div style={{ backgroundColor: '#28282B'}}>
            <div className='routes-container'>
                <Router>
                    <RRoutes >
                        <Route exact path="/" element=
                            {!user ? <Navigate to={'/signin'} replace /> : <Home />
                            } />
                        <Route exact path="/signin" element={<HomeSO />} />
                        <Route exact path="/signup" element={<SignUp />} />
                    </RRoutes>
                </Router>
            </div>
        </div>
    )
}

export default Routes