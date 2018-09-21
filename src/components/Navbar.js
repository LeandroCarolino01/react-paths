import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="" className="brand-logo">Pokes times</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                   
                </ul>
            </div>
        </nav>
    )
}

export default Navbar