import { useState } from "react"
import { connect } from "react-redux"



const CoffeeProductsItem = ({
    id,
    cathegory,
    title,
    text,
    price,
    addCup,
}) => {

    const [cupsInCart, setCupsInCart] = useState (1)
    
    const [activateCartCount, setActivateCartCount] = useState (" deactivate-el")

    // const addCup = (id) => {
    //     setCupsInCart(value => (
    //         value + 1
    //     ))

    //     if (cupsInCart >= 0) {
    //         setActivateCartCount(" ")
    //     } else {
    //         setActivateCartCount(" deactivate-el")
    //     }
    //     addCoffee(id, cupsInCart)
    // }
    // const removeCups = () => {
    //     setCupsInCart(value => (
    //         value - 1
    //     ))
    // }

    console.log(cupsInCart)

    return (        
        <div className="flex-row-between" style={{width: "100%"}}>                                   
            <div className="col-xs-6 col-sm-6 col-md-7 col-lg-8 col-xl-8 coffee-item">
                <p className="title-menu">{title}</p>
                <p className="text-ev">{text}</p>
            </div>
            <div className="title-menu flex-column-center col-xs-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
                <span>$ {price}</span>
            </div>
            <div className="flex-column-center col-xs-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
                <div className="add-btn flex-column-center" onClick={() => addCup(id, cupsInCart)}>
                    <i class="fas fa-plus-circle"></i>
                    <div className={"cart-count" + activateCartCount}>{cupsInCart}</div>
                </div>
            </div>                                                               
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCup:(id, cupsInCart) => dispatch({
        type:"ADD_CUP_TO_CART",
        id,
        cupsInCart,
    }),
})

export default connect (
    null,
    mapDispatchToProps
) (CoffeeProductsItem)