import React from 'react'
import './stickyMenu.css'

const StickyMenu = () => {
    return (
        <>
            <div className="sticky-menu deactivate-el">
                <div className="container">
                    <div className="row flex-row-between">
                        <div className="logo col-xs-6"><img src="../assets/Images/logo-coffee.png" alt="" /></div>
                        <div className="col-xs-3 col-sm-3 col-md-8 col-lg-8 col-xl-8">
                            <nav className="flex-row-right navigation hidden-menu">
                                <div><a href="#home">Home</a></div>
                                <div><a href="#about">About</a></div>
                                <div><a href="#events">Events</a></div>
                                <div><a href="#contacts">Contacts</a></div>
                            </nav>
                            <div className="col-xs-3 col-sm-3 nav-mobile-menu-none">
                                <div className="nav-mobile-menu">
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