import { connect } from "react-redux"

const CoffeeProductsItem = ({
    id,
    title,
    text,
    price,
    addCupToCart,
    removeCupFromCart,
    isAdded,
}) => {
    const cupsInCart = 1
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
                <div className="add-btn flex-column-center" onClick={() => (isAdded ? removeCupFromCart(id) : addCupToCart(id, cupsInCart))}>
                {
                    isAdded ?  <i class="fas fa-times-circle" style={{color:"#ff0000"}}></i> : <i class="fas fa-plus-circle"></i>
                }
                </div>               
            </div>                                                               
        </div>
    )
}

const mapStateToProps = (state, {id}) => ({
    isAdded: state.addButtonState[id]
})

const mapDispatchToProps = (dispatch) => ({
    addCupToCart: (id, cupsInCart) => {
        dispatch ({
            type:"ADD_CUP_TO_CART",
            id,
            cupsInCart,
        })
        dispatch ({
            type:"ADDED",
            id,
        })
    },
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
    mapStateToProps,
    mapDispatchToProps
) (CoffeeProductsItem)
