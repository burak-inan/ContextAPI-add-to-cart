import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import products from "../../assets/data/products.json";
import ProductCard from "./product-card";
import axios from "axios";

const Shop = () => {
  // const [prod, setProd]= useState([]);

  // const loadProd= async ()=> {
  //   const prdcts= await axios.get("https://65148ce0dc3282a6a3cd48f4.mockapi.io/products");
  //   console.log(prdcts.data);
  //   setProd(prdcts.data);

  // }

  // useEffect( ()=> {
  //   loadProd();
  // }, [])

  return (
    <Row className="g-5 p-3 pt-5">
      {products.map((product) => (
        <Col key={product.id} md={4} sm={6} lg={3}>
          <ProductCard {...product} />
        </Col>
      ))}
    </Row>
  );
};

export default Shop;
