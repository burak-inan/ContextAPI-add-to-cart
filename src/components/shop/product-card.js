import React, { useEffect } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { PiPlusCircleBold, PiMinusCircleBold } from "react-icons/pi";
import { useStore } from "../../store";
import { addToCart, removeFromCart } from "../../store/cart/cart-actions";

const ProductCard = (props) => {
  const { id, name, desc, price, image } = props;

  const { cartState, dispatchCart } = useStore();

  const count= cartState.filter(product=> product.id===id)[0]?.count ?? 0;

  localStorage.setItem("cartProducts", JSON.stringify(cartState));

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="h-100">{desc}</Card.Text>
        <Card.Subtitle className="mb-2">{price}$</Card.Subtitle>
        <ButtonGroup className="d-flex justify-content-center align-items-center">
          <span>
            <PiPlusCircleBold
              style={{
                fontSize: "2rem",
                color: "green",
                backgroundColor: "grey",
                borderRadius: "50%",
              }}
              onClick={()=>dispatchCart(addToCart(id, count))}
            />
          </span>
          <p
            variant="primary"
            className="m-0 fs-4 m-1 border border-secondary rounded"
            style={{ width: "2rem" }}
          >
            {count}
          </p>
          <span role="button">
            <PiMinusCircleBold
              style={{
                fontSize: "2rem",
                color: "red",
                backgroundColor: "grey",
                borderRadius: "50%",
              }}
              onClick={()=> dispatchCart(removeFromCart(id,count))}
            />
          </span>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
