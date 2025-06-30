import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './component/Menu'
import Home from './Pages/Home'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import NotFound from './Pages/NotFound'
import PrivateRoute from './AuthGuard/PrivateRoute'
import Dashboard from './Pages/User/Dashboard'
import Details from './Pages/Product/Details'
import Cart from './Pages/Product/Cart'

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path={`/`} element={<Home/>} />
            <Route path={`/details/:id`} element={<Details/>} />
            <Route path={`/cart`} element={<Cart/>} />
             <Route element={<PrivateRoute/>}>
                   <Route path={`/dashboard`} element={<Dashboard/>} />
             </Route>
            <Route path={`/login`} element={<Login/>} />
            <Route path={`/register`} element={<Register/>} />
            <Route path={`/*`} element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
