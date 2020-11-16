import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import rentHouse from "../../../FakeData/fakeData";
import MapHouseRent from "../MapHouseRent/MapHouseRent";
import "./HouseRent.sass";

const HouseRent = () => {
  const [houseRent] = useState(rentHouse);

  return (
    <section>
      <Container>
        <Row className="justify-content-center ">
          <div className="houseRend__content mt-5 mb-5">
            <h5>House Rent</h5>
            <h1>Discover the latest Rent</h1>
            <h1>available tody</h1>
          </div>
        </Row>
        <Row className="justify-content-center mt-3 mb-3">
          {houseRent.map((house, houseID) => (
            <MapHouseRent house={house} key={houseID} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HouseRent;
