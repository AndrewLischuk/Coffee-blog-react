
import { keys } from "lodash"
import { connect } from "react-redux"
import coffeeProductsBase from "../../App/Main/CoffeeProducts/coffeeProductsBase"
import { getProductsObj } from "../getProductsObj"
import CartItem from "./CartItem"


const Cart = ({
    products,
    productsObj = getProductsObj (coffeeProductsBase)
}) => {
    
    return (
        <>
            {
                keys(products).map(productId => (
                    <CartItem
                        key={productId}
                        coffeeProduct={productsObj[productId]}
                        productCount={products[productId]}
                    />
                ))
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    products: state.coffeeInCartState
})

export default connect (
    mapStateToProps,
) (Cart)