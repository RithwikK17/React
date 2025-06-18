import React from "react"

const Menu= ()=>{
    return(
        <nav className="navbar">
            <NavLink to={`/`} className="logo">Logo Here</NavLink>

            <ul className="nav-links">
                <li>
                    <NavLink to={`/home`}>Home</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;