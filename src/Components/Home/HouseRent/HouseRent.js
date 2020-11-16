import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./HouseRent.sass";
import test from "../../../images/Rectangle 394.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HotelIcon from "@material-ui/icons/Hotel";
import BathtubIcon from "@material-ui/icons/Bathtub";

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
        <Row className="justify-content-center mt-3 mb-3">
          <Col lg={4} md={6} sm={12}>
            <Card style={{ border: "none" }} className="houseRent__card">
              <Card.Img variant="top" src={test} />
              <Card.Body>
                <Card.Title className="card__title">Card Title</Card.Title>
                <Card.Text>
                  <LocationOnIcon className="cardIcon" />
                </Card.Text>
                <div className="houseRent__cardBody">
                  <Card.Text>
                    <HotelIcon className="cardIcon" />
                  </Card.Text>
                  <Card.Text>
                    <BathtubIcon className="cardIcon" />
                  </Card.Text>
                </div>
                <div className="card__footer">
                  <div className="card__price">$250</div>
                  <Button className="card__button" variant="primary">
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HouseRent;
