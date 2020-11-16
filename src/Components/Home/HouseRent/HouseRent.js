import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./HouseRent.sass";
import test from "../../../images/Rectangle 394.png";

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
          <Col md={4} sm={12}>
            <Card className="houseRent__card">
              <Card.Img variant="top" src={test} />
              <Card.Body>
                <Card.Title style={{ overflow: "hidden" }}>
                  Card Title
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="houseRent__cardBody">
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </div>
                <div className="card__footer">
                  <Button variant="primary">Go somewhere</Button>
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
