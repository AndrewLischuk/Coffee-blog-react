

export const getProductsObj = (array) => array.reduce((obj,product) => ({
    ...obj,
    [product.id]:product
}),{})