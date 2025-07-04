import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <div className="navbar navbar-expand-md navbar-dark bg-success">
        <div className="container">
          <NavLink to={`/`} className="navbar-brand">Logo Here</NavLink>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id='menu'>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'/'} className="nav-link">
                 <i className="bi bi-house"></i> Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to={'/create'} className="nav-link">
                 <i className="bi bi-person-plus"></i> Create</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
