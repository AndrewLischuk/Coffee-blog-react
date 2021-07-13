import Separator from "../../Separator/Separator"
import coffeeProductsBase from "./coffeeProductsBase"
import CoffeeProductsItem from "./CoffeeProductsItem"

const CoffeeBlock = () => {
    return (
        <>
            <div className="title-ev coffee-list">
                <span>Classic Coffee</span>
                <Separator/>
            </div>
            {
                coffeeProductsBase.filter(item => item.cathegory === "Classic Coffee") 
                .map(({
                    id,
                    cathegory,
                    title,
                    text,
                    price,
                }) => (
                    <CoffeeProductsItem
                        key={id}
                        id={id}
                        cathegory={cathegory}
                        title={title}
                        text={text}
                        price={price}
                    />
                ))
            }
            <div className="title-ev coffee-list">
                <span>Flavored Coffee</span>
                <Separator/>
            </div>
            {
                coffeeProductsBase.filter(item => item.cathegory === "Flavored Coffee") 
                .map(({
                    id,
                    cathegory,
                    title,
                    text,
                    price,
                }) => (
                    <CoffeeProductsItem
                        key={id}
                        id={id}
                        cathegory={cathegory}
                        title={title}
                        text={text}
                        price={price}
                    />
                ))
            }
        </>
    )
}

export default CoffeeBlock