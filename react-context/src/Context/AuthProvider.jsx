import React, { createContext, useState } from 'react'

// create context instance
export const AuthContext = createContext()

// provider component
function AuthProvider(props) {
    const [isLogin,setIsLogin] = useState(false)
    const [token,setToken] = useState(false)
    const [user,setUser] = useState(null)

    return (
        <AuthContext.Provider value={{isLogin,token,user}}>
                {
                    props.children
                }
        </AuthContext.Provider>
    )
}

export default AuthProvider