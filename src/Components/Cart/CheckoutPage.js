import { Link } from "react-router-dom"
import Separator from "../../App/Separator/Separator"
import ScrollFunc from "../ScrollFunc"



const CheckoutPage = () => {
    return (
        <>
        <ScrollFunc/>
        <div className="cart">
            <div className="container">
                <div className="row">
                    <div className="cart-page flex-column-center fade-in col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                        <h1 className="title-section" style={{padding:"20px 20px 0 20px"}}>Cart</h1>
                        <Separator/>
                        <div style={{minHeight: "400px"}}>Your order is being processed</div>
                        <Separator/>
                        <button className="alt-btn" style={{marginBottom:"20px"}}><Link to="/"><i className="fas fa-home"></i></Link></button>
                        <button className="close-btn flex-column-center"><Link to="/menu"><i className="fas fa-times"></i></Link></button>
                    </div>
                </div>
            </div>
        </div>            
        <div className="cart-overlay fade-in"></div>
        </>
    )
}

export default CheckoutPage