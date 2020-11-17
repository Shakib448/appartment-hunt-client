import React from "react";
import { Container, Row } from "react-bootstrap";
import ApartmentDetails from "../ApartmentDetails/ApartmentDetails";
import ApartmentForm from "../ApartmentForm/ApartmentForm";
import Banner from "../Home/Banner/Banner";
const Apartment = () => {
  return (
    <>
      <Banner />
      <>
        <Container>
          <Row className="mt-5 mb-5">
            <ApartmentDetails />
            <ApartmentForm />
          </Row>
        </Container>
      </>
    </>
  );
};

export default Apartment;
