import products from "../../assets/data/products.json"

export const cartInitialState= JSON.parse(localStorage.getItem("cartProducts"))??[];