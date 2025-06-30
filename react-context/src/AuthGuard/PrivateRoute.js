import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'

function PrivateRoute(props) {
    const { isLogin, token } = useContext(AuthContext)
  return (
    <React.Fragment>
            {
                isLogin && token ? <Outlet/> : <Navigate to={`/login`} />
            }
    </React.Fragment>
  )
}

export default PrivateRoute
