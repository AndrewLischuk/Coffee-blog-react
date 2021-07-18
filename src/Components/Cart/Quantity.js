
const Quantity = ({
    productsInCart,
    onIncrementCount,
    onDecrementCount
}) => {
    return (
        <>
        <button className="add-btn flex-row-center" 
            onClick={() => onDecrementCount()}
            disabled={productsInCart.productCount <= 0}>
            <i class="fas fa-chevron-circle-left"></i>
        </button>
        <div className="input-count flex-column-center"><input value={productsInCart.productCount} readOnly></input></div>
        <button className="add-btn flex-row-center" 
            onClick={() => onIncrementCount()}
            disabled={productsInCart.productCount >= 5}>
            <i class="fas fa-chevron-circle-right"></i>
        </button>
        </>
    )
}

export default Quantity