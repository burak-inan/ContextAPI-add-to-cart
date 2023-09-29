import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useStore } from "../../store";
import ProductCard from "../shop/product-card";
import products from "../../assets/data/products.json";
import { clearCart } from "../../store/cart/cart-actions";

const Cart = () => {

  const { cartState, dispatchCart } = useStore();

  // console.log(localStorage.getItem("cartProducts"));
  // const cartProductIds= JSON.parse(localStorage.getItem("cartProducts")).map(item=> item.id);
  // const cartProducts= products.filter( product=> cartProductIds.includes(product.id));

  const stateIds= cartState.map(item=> item.id);
  const match= products.filter(product=> stateIds.includes(product.id));
  localStorage.setItem("cartProducts", JSON.stringify(cartState));

  return (
    <Row className="g-5 p-3 pt-5">
      {match.length === 0
        ? <p className="text-center">You have not added any products to the cart yet!</p>
        : match.map((product) => (
            <Col key={product.id} md={4} sm={6} lg={3}>
              <ProductCard {...product} />
            </Col>
          ))}
      <Button onClick={()=> dispatchCart(clearCart())}>Remove All</Button>
    </Row>
  );
};

export default Cart;
