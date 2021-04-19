import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                React_Portfolio
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                          to="/" 
                          className={
                            window.location.pathname === "/" || window.location.pathname === "/about" 
                             ? "nav-link active" 
                             : "nav-link"
                        }
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/applications"
                        className={window.location.pathname === "/applications" ? "nav-link active" : "nav-link"}
                        >
                            Applications
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/professionallinks"
                        className={window.location.pathname === "/professionallinks" ? "nav-link active" : "nav-link"}
                        >
                            ProfessionalLinks
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;