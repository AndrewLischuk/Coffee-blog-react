import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './menu.css'

const Menu = ({
    hActivate,
    deActivateH
}) => {

    const [mQuery, setMQuery] = useState(
       window.innerWidth < 769 ? " navigation hidden-menu" : " "
    );

    const handleMQuery = () => {
        (window.innerWidth > 769) ? setMQuery(" ") : setMQuery(" navigation hidden-menu")               
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 769px)");
        mediaQuery.addEventListener("change", handleMQuery);        
        return () => mediaQuery.removeEventListener("change", handleMQuery);
    }, []);
   
    return (      
        <nav className={"flex-row-right" + mQuery + hActivate} >
            <div><Link to="/" onClick={() => (window.innerWidth < 769) ? deActivateH() : ""}>Home</Link></div>
            <div><Link to="/about"  onClick={() => (window.innerWidth < 769) ? deActivateH() : ""}>About</Link></div>
            <div><Link to="/menu"  onClick={() => (window.innerWidth < 769) ? deActivateH() : ""}>Menu</Link></div>
            <div><Link to="/events" onClick={() => (window.innerWidth < 769) ? deActivateH() : ""}>Events</Link></div>
            <div><Link to="/contacts" onClick={() => (window.innerWidth < 769) ? deActivateH() : ""}>Contacts</Link></div>
            <div><Link to="/cart" onClick={() => (window.innerWidth < 769) ? deActivateH() : ""}><i class="fas fa-shopping-cart"></i></Link></div>
        </nav>
    )
}

export default Menu