import { keys } from "lodash"
import { connect } from "react-redux"
import coffeeProductsBase from "../../App/Main/CoffeeProducts/coffeeProductsBase"
import { getProductsObj } from "../getProductsObj"
import CartItem from "./CartItem"
import ScrollFunc from "../ScrollFunc"


const Cart = ({
    productsInCart,
    productsObj = getProductsObj(coffeeProductsBase)
}) => {
    return (
        <>
        <ScrollFunc/>
            {
                keys(productsInCart).map(productId => (
                    <CartItem
                        key={productId}
                        coffeeProduct={productsObj[productId]}
                        productsInCart={productsInCart[productId]}
                    />
                ))
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.coffeeInCartState
})

export default connect (
    mapStateToProps,
) (Cart)