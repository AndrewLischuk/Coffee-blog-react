import React from 'react'
import './menu.css'

const Menu = () => {
    return (
        <nav className="flex-row-right">
            <div><a href="#home">Home</a></div>
            <div><a href="#about">About</a></div>
            <div><a href="#events">Events</a></div>
            <div><a href="#contacts">Contacts</a></div>
        </nav>
    )
}

export default Menu