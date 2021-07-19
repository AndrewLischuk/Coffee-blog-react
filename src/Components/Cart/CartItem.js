import { connect } from "react-redux"
import Quantity from "./Quantity"

const CartItem = ({
    coffeeProduct,
    productsInCart,
    incrementCount,
    decrementCount,
    removeCupFromCart,
}) => {
    return (        
        <div className="flex-row-between" style={{width:"100%"}}>                                   
            <div className="flex-column-left col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 coffee-item">
                <p className="title-menu">{coffeeProduct.title}</p>
                
            </div>
            <div className="flex-row-center col-xs-5 col-sm-5 col-md-4 col-lg-4 col-xl-4">                        
                <Quantity
                    productsInCart={productsInCart}
                    onIncrementCount={() => incrementCount(coffeeProduct.id, productsInCart.productCount)}
                    onDecrementCount={() => (productsInCart.productCount === 1) ? removeCupFromCart(coffeeProduct.id) : decrementCount(coffeeProduct.id, productsInCart.productCount)} 
                />                        
            </div>
            <div className="title-menu flex-column-center col-xs-3 col-sm-3 col-md-4 col-lg-4 col-xl-4">
                <span>$ {coffeeProduct.price * productsInCart.productCount}</span>
            </div>
                                                                            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    incrementCount:(id, cupsInCart) => dispatch({
        type:"INCREMENT_COUNT",
        id,
        cupsInCart,
    }),
    decrementCount:(id, cupsInCart) => dispatch({
        type:"DECREMENT_COUNT",
        id,
        cupsInCart,
    }),
    removeCupFromCart:(id) => {
        dispatch({
            type:"REMOVE_CUP_FROM_CART",
            id,
        })
        dispatch({
            type:"REMOVED",
            id,  
        })
    }
})

export default connect (
    // 
    null,
    mapDispatchToProps    
) (CartItem)
