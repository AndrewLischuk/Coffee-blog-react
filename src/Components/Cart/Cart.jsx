import { keys } from "lodash"
import { connect } from "react-redux"
import coffeeProductsBase from "../../App/Main/CoffeeProducts/coffeeProductsBase"
import { getProductsObj } from "../getProductsObj"
import CartItem from "./CartItem"
import ScrollFunc from "../ScrollFunc"
import Separator from "../../App/Separator/Separator"
import { Link } from "react-router-dom"
import Total from "./Total"


const Cart = ({
    productsInCart,
    productsObj = getProductsObj(coffeeProductsBase),
    removeCupFromCart,
}) => {
    const arrId = keys(productsInCart)
    console.log(arrId)
    if (keys(productsInCart).length === 0) {

        return (
            <>
            <ScrollFunc/>
            <div className="cart slide-in-cart">
                <div className="container">
                    <div className="row">
                        <div className="cart-page flex-column-center fade-in col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <h1 className="title-section" style={{padding:"20px 20px 0 20px"}}>Cart</h1>
                            <Separator/>
                            <div style={{minHeight: "400px"}}>Your cart is currently empty</div>
                            <Separator/>
                            <button className="alt-btn" style={{marginBottom:"20px"}}><Link to="/menu">SEE MENU</Link></button>
                            <button className="close-btn flex-column-center"><Link to="/menu"><i className="fas fa-times"></i></Link></button>
                        </div>
                    </div>
                </div>
            </div>            
            <div className="cart-overlay fade-in"></div>
            </>
        )
    } else {
    return (
        <>
        <ScrollFunc/>
        <div className="cart slide-in-cart">
            <div className="container">
                <div className="row">
                    <div className="cart-page flex-column-center fade-in col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">

                        <h1 className="title-section" style={{padding:"20px 20px 0 20px"}}>Cart</h1>

                        <Separator/>
                        
                        <div className="flex-row-start" style={{minHeight: "400px", width: "100%"}}>                                   
                            {
                                keys(productsInCart).map(productId => (
                                    <CartItem
                                        key={productId}
                                        coffeeProduct={productsObj[productId]}
                                        productsInCart={productsInCart[productId]}
                                    />
                                ))
                            }                                                                                           
                        </div>  
                            <Total
                                productsInCart={productsInCart}
                            />
                        <div>
                            
                        </div>
                        
                        <Separator/>
                        
                        <button className="alt-btn" style={{marginBottom:"20px"}}><Link to="/checkout" onClick={() => removeCupFromCart(arrId)}>ORDER NOW</Link></button>
                        <button className="close-btn flex-column-center"><Link to="/menu"><i className="fas fa-times"></i></Link></button>
                    </div>                    
                </div>
            </div>
            
        </div>
        <div className="cart-overlay fade-in"></div>
        </>
    )
}}

const mapStateToProps = (state) => ({
    productsInCart: state.coffeeInCartState
})
const mapDispatchToProps = (dispatch) => ({    
    removeCupFromCart:(id) => {
        dispatch({
            type:"REMOVED_ALL",
            id, 
        })
        dispatch({
            type:"REMOVE_CUP_FROM_CART",
            id,
        })
    }
})
export default connect (
    mapStateToProps,
    mapDispatchToProps,
) (Cart)