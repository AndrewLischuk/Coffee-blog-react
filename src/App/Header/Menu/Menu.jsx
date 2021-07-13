import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './menu.css'

const Menu = ({
    hActivate,
    deActivateH
}) => {

    const [mQuery, setMQuery] = useState(
       window.innerWidth < 575 ? " navigation hidden-menu" : " "
    );

    const handleMQuery = () => {
        (window.innerWidth > 575) ? setMQuery(" ") : setMQuery(" navigation hidden-menu")               
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 575px)");
        mediaQuery.addEventListener("change", handleMQuery);        
        return () => mediaQuery.removeEventListener("change", handleMQuery);
    }, []);
   
    return (      
        <nav className={"flex-row-right" + mQuery + hActivate} >
            <div><Link to="/" onClick={() => (window.innerWidth < 575) ? deActivateH() : ""}>Home</Link></div>
            <div><Link to="/about"  onClick={() => (window.innerWidth < 575) ? deActivateH() : ""}>About</Link></div>
            <div><Link to="/menu"  onClick={() => (window.innerWidth < 575) ? deActivateH() : ""}>Menu</Link></div>
            <div><Link to="/events" onClick={() => (window.innerWidth < 575) ? deActivateH() : ""}>Events</Link></div>
            <div><Link to="/contacts" onClick={() => (window.innerWidth < 575) ? deActivateH() : ""}>Contacts</Link></div>
        </nav>
    )
}

export default Menu