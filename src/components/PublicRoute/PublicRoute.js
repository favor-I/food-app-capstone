import React from 'react'
import { Navigate } from 'react-router-dom'
// import { useAuth } from './contexts/AuthContext'

export const PublicRoutes = ({children, isLoggedIn}) => {
  return isLoggedIn?<Navigate to="/dashboard"/>:children
}