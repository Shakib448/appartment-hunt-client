import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Service.sass";

const Service = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-center ">
          <div className="service__content mt-5 mb-5">
            <h5>Service</h5>
            <h1>We're an agency tailored to all</h1>
            <h1>client's needs that always delivers</h1>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
