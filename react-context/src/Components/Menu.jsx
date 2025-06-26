import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  const [year,setYear] = useState(new Date().getFullYear())
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <NavLink to={`/`} className="navbar-brand">React Context</NavLink>
          <button className="float-end btn btn-outline-secondary" data-bs-toggle="offcanvas" data-bs-target="#menu">
            <navbar className="navbar-toggler-icon"></navbar>
          </button>
        </div>
      </nav>

      {/* offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex={"-1"} id='menu'>
          <div className="offcanvas-header">
            <h4 className="offcanvas-title text-dark">React-Context</h4>
            <button className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <div className="list-group mt-3 mb-3">
              <NavLink to={`/`} className="list-group-item">
                  Home
              </NavLink>
              <NavLink to={`/logout`} className="list-group-item">Logout</NavLink>
            </div>
            <div className="list-group mt-3 mb-3">
              <NavLink to={`/login`} className="list-group-item">Login</NavLink>
              <NavLink to={`/register`} className="list-group-item">Register</NavLink>
            </div>
          </div>
          <div className="offcanvas-footer text-center">
            <p className="text-dark">All Rights Reserved {year}</p>
          </div>
      </div>
    </div>
  )
}
