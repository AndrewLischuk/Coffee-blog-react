import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="flex-column-bottom footer"><a href="" name="contacts"></a>
            <div className="container">
                <div className="row">
                    <div className="subfooter flex-row-between">
                        <div className="flex-column-left subfooter-block col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <img src="../assets/Images/address.png" alt="" />
                            <h1>Address</h1>
                            <p>Level 13, 2 Elizabeth St,<br />
                                    Melbourne, Victoria 3000,<br />
                                    Australia</p>
                        </div>
                        <div className="flex-column-left subfooter-block col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <img src="../assets/Images/e-mail.png" alt="" />
                            <h1>E-mail</h1>
                            <p><a href=""><span>noreply@envato.com</span></a>
                                <a href=""><span>noreply@envato.com</span></a></p>
                        </div>
                        <div className="flex-column-left subfooter-block col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <img src="../assets/Images/call-us.png" alt="" />
                            <h1>Call Us</h1>
                            <p>+61 (0) 3 8376 6284</p>
                        </div>
                        <div className="flex-column-left subfooter-block col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                            <img src="../assets/Images/opening-hours.png" alt="" />
                            <h1>Opening Hours</h1>
                            <p>Monday - Friday: 8:00 - 24:00 <br />
                                    Saturday: 8:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{borderTop: '2px solid #443d38'}, {width: '100%'}}></div>
            <div className="container">
                <div className="row">
                    <div className="flex-row-between copyright">
                        <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">© 2021 BeCoffee 2 - BeTheme. All Rights Reserved. <span>Muffin group</span></div>
                        <div><a href="#home"><i className="fas fa-chevron-up fa-lg"></i></a></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer