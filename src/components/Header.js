import React from "react";

function Header() {
    return(
        <header className="Header">
           <div className="topnav">
               <a className="active" href="#home">Home</a>
               <a href="#applications">Applications</a>
               <a href="#professional">Professional</a>
               <a href="#contact">Contact</a>
               <a href="#about">About</a>
            </div>
        </header>
    );
}

export default Header;