import React, { useEffect, useState } from 'react'
import './stickyMenu.css'
import Menu from '../Header/Menu/Menu'
import Logo from '../Header/Logo/Logo'

const StickyMenu = () => {    

    const [stickyToggle, setStickyToggle] = useState(" deactivate-el")
    const [hActivate, setHActivate] = useState(" ")

    const handleScroll = () => {
        (window.scrollY > 200) ? setStickyToggle(" activate-el") : setStickyToggle(" deactivate-el")               
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const activateH = () => {
        hActivate === " " ? setHActivate(" active-menu") : setHActivate(" ")
    }
    const deActivateH = () => {
        hActivate === " active-menu" ? setHActivate(" ") : setHActivate(" active-menu")
    }
       
    return (
        <>        
            <div className={"sticky-menu fade-in" + stickyToggle}>               
                <div className="container">
                    <div className="row flex-row-between">
                        <div className="logo col-xs-6">
                            <Logo/>    
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-8 col-xl-8">
                            <Menu
                                hActivate={hActivate}
                                deActivateH={deActivateH}
                            />
                            <div className="col-xs-3 col-sm-3 nav-mobile-menu-none">
                                <div className={"nav-mobile-menu" + hActivate} onClick={() => activateH()}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default StickyMenu