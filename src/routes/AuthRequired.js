import { Navigate } from 'react-router-dom'
import { auth } from '../auth/FirebaseConfig'


export const AuthRequired = ({ children }) => {
    const { user } = auth.currentUser
  
    if (!user) {
      return <Navigate to={'/signin'} replace />
    }
  
    return children
  }