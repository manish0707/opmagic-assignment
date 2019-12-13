import React from 'react'
import '../styles/Home.css';
import { Link  } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <nav className="navbar-wrapper">
                <ul className="navbar-list">
                    <li className="navbar-list-item"><Link to="/" >Home</Link></li>
                    <li className="navbar-list-item"><Link to="/login" >Login</Link></li>
                    <li className="navbar-list-item"><Link to="/signup" >Signup</Link></li>
                </ul>
            </nav>
        </div>
    )
}
