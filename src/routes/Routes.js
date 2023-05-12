import React from 'react'
import { BrowserRouter as Router, Routes as RRoutes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import { AuthRequired } from './AuthRequired'

const Routes = () => {
    return (
        <Router>
            <RRoutes>
                <Route exact path="/" element={
                    // <AuthRequired>
                        <Home />
                    // </AuthRequired>}
                     }/>
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/signup" element={<SignUp />} />
            </RRoutes>
        </Router>
    )
}

export default Routes