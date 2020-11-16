import React from "react";
import { Container, Row } from "react-bootstrap";
import "./HouseRent.sass";

const HouseRent = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-center m-4">
          <div className="houseRend__content">
            <h5>House Rent</h5>
            <h1>Discover the latest Rent</h1>
            <h1>available tody</h1>
          </div>
        </Row>
        <Row className="justify-content-center mt-3 mb-3"></Row>
      </Container>
    </section>
  );
};

export default HouseRent;
