import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-logo">
                <span>LOGO</span>
            </div>

            <ul className="navbar-links">
                <li><a href="#">Hamburgueria</a></li>
                <li><a href="#">Restaurante Japonês</a></li>
                <li><a href="#">Pizzaria</a></li>
            </ul>

            <div className="navbar-action">
                <button className="action-button">Entrar ou cadastrar</button>
            </div>
        </nav>
    )
}

export default Navbar;