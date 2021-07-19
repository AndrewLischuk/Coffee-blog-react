import { keys } from "lodash"
import coffeeProductsBase from "../../App/Main/CoffeeProducts/coffeeProductsBase"
import { getProductsObj } from "../getProductsObj"


const Total = ({
    coffeeProduct = getProductsObj(coffeeProductsBase),
    productsInCart
}) => {
    return (
        <div className="title-ev"> Total: <span>$ {
            keys(productsInCart).reduce((total, id) => (
                total + (coffeeProduct[id].price * productsInCart[id].productCount)  
            ),0) 
        }</span>
        </div>
    )
}
export default Total