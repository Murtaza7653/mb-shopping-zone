import React from 'react';
import logo from './images/logo.jpg';
import cart from './images/cart.png'
import { Link } from "react-router-dom";
import './Styles/Navbar.css'


export default function Navbar() {

    return (

        <nav className="navbar navbar-dark navbar-expand-lg">
            <div className="container-fluid">
                <img className=' mx-2' src={logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item mx-2 my-3">
                            <Link className="site-name nav-link active" aria-current="page" to="/">MB Shopping Zone</Link>
                        </li>
                        <li className="float-right nav-item mx-2 my-3">
                            <Link className="nav-link active" to="/cart">
                                <img src={cart} alt='cart'/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}
