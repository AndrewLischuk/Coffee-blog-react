import { values } from "lodash"
import { useState } from "react"



const CoffeeProductsItem = ({
    id,
    cathegory,
    title,
    text,
    price,
}) => {

    const [cupsInCart, setCupsInCart] = useState (0)
    
    const [activateCartCount, setActivateCartCount] = useState (" deactivate-el")

    const addCups = () => {
        setCupsInCart(value => (
            value + 1
        ))

        if (cupsInCart >= 0) {
            setActivateCartCount(" ")
        } else {
            setActivateCartCount(" deactivate-el")
        }
    }
    const removeCups = () => {
        setCupsInCart(value => (
            value - 1
        ))
    }

    

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
                <div className="add-btn flex-column-center" onClick={() => addCups()}>
                    <i className="fas fa-cart-plus"></i>
                    <div className={"cart-count" + activateCartCount}>{cupsInCart}</div>
                </div>
            </div>                                                               
        </div>
    )
}

export default CoffeeProductsItem