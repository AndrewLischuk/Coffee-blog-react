import React from 'react'
import './stickyMenu.css'
import Menu from '../Header/Menu/Menu'
import Logo from '../Header/Logo/Logo'

const StickyMenu = () => {
    
    return (
        <>
            <div className="sticky-menu deactivate-el">
                <div className="container">
                    <div className="row flex-row-between">
                        <div className="logo col-xs-6">
                            <Logo/>    
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-8 col-lg-8 col-xl-8">
                            <Menu/>
                            <div className="col-xs-3 col-sm-3 nav-mobile-menu-none">
                                <div className="nav-mobile-menu" onClick={() => console.log("clicked")}>
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