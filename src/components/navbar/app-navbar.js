import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import "./app-navbar.css";
import { useStore } from "../../store";

const AppNavbar = () => {

  const { cartState }= useStore();

  const count= cartState.reduce((total, product) => {return total+ product.count}, 0);

  return (
    <Navbar bg="primary" data-bs-theme="dark" className="sticky-top">
      <Container>
        <Navbar.Brand className="p-4" href="#home">Navbar</Navbar.Brand>
        <Nav className="align-items-center">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/cart" className="cart-link">
            <GiShoppingCart style={{ fontSize: "2rem", color: "white" }}/>
            <span className="cart-count">{count? count: ""}</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
