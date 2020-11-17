import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ApartmentForm from "../ApartmentForm/ApartmentForm";
import Banner from "../Home/Banner/Banner";
const ApartmentDetails = () => {
  return (
    <>
      <Banner />
      <>
        <Container>
          <Row className="mt-5 mb-5">
            <Col lg={8} md={6} sm={12}>
              asdfasdfasdfasdfasdfasdfsadfsdfsadfsadfsadfsadfasdf asdf sad fsa
              df sad fs ad
            </Col>
            <ApartmentForm />
          </Row>
        </Container>
      </>
    </>
  );
};

export default ApartmentDetails;
