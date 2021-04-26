import React from 'react'


const Header = () => {
    <header className="header"><a name="home" href=""></a>
        <div className="container">
            <div className="row">
                <div className="section flex-column-left">
                    <div className="menu flex-row-between" style="width: 100%;">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"><img
                            src="./Images/logo-coffee.png" alt="" /></div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <nav className="flex-row-right">
                                <div><a href="#home">Home</a></div>
                                <div><a href="#about">About</a></div>
                                <div><a href="#events">Events</a></div>
                                <div><a href="#contacts">Contacts</a></div>
                            </nav>
                        </div>
                    </div>
                    <div className="subheader flex-column-left">
                        <div className="col-xs-8 col-sm-8 col-md-6 col-lg-4 col-xl-4">
                            <h1><span>A real Italian cafe</span></h1>
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                            <p>Discover the taste of real coffee</p>
                        </div>
                        <button style="margin-left: 45px;">MEET US <i className="fas fa-chevron-down fa-xs" style="padding-left: 10px;"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="subheader-block flex-row-right col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <div><img className="box-img" src="./Images/subheader-block-1.jpg" alt="" /><a
                className="col-xs-8 col-sm-8 col-md-4 col-lg-4 col-xl-4" href="">Explore the history of the cafe
                <br /><span><i className="fas fa-angle-double-right"></i></span></a></div>
            <div><img className="box-img" src="./Images/subheader-block-2.jpg" alt="" /><a
                className="col-xs-8 col-sm-8 col-md-4 col-lg-4 col-xl-4" href="">Discover our unique coffee <br /><span><i
                    className="fas fa-angle-double-right"></i></span></a>
            </div>
        </div>
    </header>
}

export default Header