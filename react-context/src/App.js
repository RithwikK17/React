import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import Home from './Pages/Home'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import NotFound from './Pages/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/register`} element={<Register/>}/>
        <Route path={`/*`} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
