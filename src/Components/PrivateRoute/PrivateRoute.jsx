import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'

export const PrivateRoute = ({children}) => {
  const { authState } = useAuth()
  const {token } = authState;
  return (
   <>
   {token ? children : <Navigate to="/login" replace/> }
   </>
  )
}
