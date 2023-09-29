import React from "react";
import { StoreProvider, useStore } from "./store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/navbar/app-navbar";
import Main from "./components/main/main";
import Shop from "./components/shop/shop";
import { Container, Row } from "react-bootstrap";
import Cart from "./components/cart/cart";

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Container>
          <AppNavbar />
            <Routes>
              <Route path="/" element={<Navigate to={"/main"} />} />
              <Route path="/main" element={<Main />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </Container>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
