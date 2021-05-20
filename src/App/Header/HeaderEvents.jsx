import React from 'react'
import './header.css'
import subheaderB1 from '../../assets/Images/subheader-block-1.jpg'
import subheaderB2 from '../../assets/Images/subheader-block-2.jpg'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'


const HeaderEvents = () => {
    return (        
        <header className="header header-events">
            <div className="container">
                <div className="row">
                    <div className="section flex-column-left">
                        <div className="menu flex-row-between" style={{ width: '100%' }}>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">                                
                                <Logo/>                                 
                            </div>                                    
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <Menu/>
                            </div>
                        </div>
                        <div className="subheader-additinal flex-column-left">
                            <div className="col-xs-8 col-sm-8 col-md-6 col-lg-4 col-xl-4">
                                <h1><span>A real Italian cafe</span></h1>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                                <p>EVENTS</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>            
        </header>
    )
}

export default HeaderEvents