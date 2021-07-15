import { connect } from "react-redux"


const CartItem = ({
    coffeeProduct,
    productCount,
    incrementCount,
    decrementCount,
    mincount,
}) => {
    return (
        <div className="container">
            <div className="row flex-row-center">
                <div className="flex-row-between col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" >                                   
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 coffee-item">
                        <p className="title-menu">{coffeeProduct.title}</p>
                        
                    </div>
                    <div className="flex-row-center col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">                        
                        <button className="add-btn flex-row-center" 
                            onClick={() => decrementCount(coffeeProduct.id, productCount)}
                            disabled={productCount <= 1}>
                            <i class="fas fa-chevron-circle-left"></i>
                        </button>
                        <div className="input-count flex-column-center"><input value={productCount} readOnly></input></div>
                        <button className="add-btn flex-row-center" 
                            onClick={() => incrementCount(coffeeProduct.id, productCount)}
                            disabled={productCount >= 5}>
                            <i class="fas fa-chevron-circle-right"></i>
                        </button>                        
                    </div>
                    <div className="title-menu flex-column-center col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <span>$ {coffeeProduct.price * productCount}</span>
                    </div>
                                                                                   
                </div>
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
    })
})

export default connect (
    null,
    mapDispatchToProps    
) (CartItem)
