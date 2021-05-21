import React from 'react'
import './header.css'
import subheaderB1 from '../../assets/Images/subheader-block-1.jpg'
import subheaderB2 from '../../assets/Images/subheader-block-2.jpg'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'


const HeaderAbout = () => {
    return (        
        <header className="header header-about"><a href="" name="home"></a>
            <div className="container">
                <div className="row">
                    <div className="section flex-column-left">
                        <div className="menu fade-in flex-row-between" style={{ width: '100%' }}>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">                                
                                <Logo/>                                 
                            </div>                                    
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <Menu/>
                            </div>
                        </div>
                        <div className="subheader-additinal fade-in flex-column-left">
                            <div className="col-xs-8 col-sm-8 col-md-6 col-lg-4 col-xl-4">
                                <h1><span>A real Italian cafe</span></h1>
                            </div>
                            <div className="slide-in col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                                <p>About coffee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subheader-block flex-row-right col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                <div><img className="box-img" src={subheaderB1} alt="" /><a
                    className="col-xs-8 col-sm-8 col-md-4 col-lg-4 col-xl-4" href="">Explore the history of the cafe
            <br /><span><i className="fas fa-angle-double-right"></i></span></a></div>
                <div><img className="box-img" src={subheaderB2} alt="" /><a
                    className="col-xs-8 col-sm-8 col-md-4 col-lg-4 col-xl-4" href="">Discover our unique coffee <br /><span><i
                        className="fas fa-angle-double-right"></i></span></a>
                </div>
            </div>           
        </header>
    )
}

export default HeaderAbout