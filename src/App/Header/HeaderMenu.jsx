import './header.css'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'
import Cart from '../../Components/Cart/Cart'


const HeaderMenu = () => {
    return (        
        <header className="header header-menu"><a href="" name="home"></a>
            <div className="container">
                <div className="row">
                    {/* <Cart/> */}
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
                                <p>OUR MENU</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>            
        </header>
    )
}

export default HeaderMenu