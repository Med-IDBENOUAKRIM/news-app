import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav" >
            <ul className="nav__list">
                <li>
                    <Link to="/wall-street">Wall Street</Link>
                </li>
                <li>
                    <Link to="/tech-crunch">TechCrunch</Link>
                </li>
                <li>
                    <Link to="top-business">Top business</Link>
                </li>
                <li>
                    <Link to="tesla">Tesla</Link>
                </li>
                <li>
                    <Link to="apple">Apple</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
