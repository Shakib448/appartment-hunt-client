import React from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Banner.sass";

const Banner = () => {
  const location = useLocation();
  return (
    <>
      <section className="banner">
        <Container>
          <Row
            className={`${
              location.pathname === "/" ? "banner__form" : "apartment__Banner"
            }`}
          >
            {location.pathname === "/" ? (
              <>
                <h1>Find Your House Rent</h1>
                <Form>
                  <Form.Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Label htmlFor="inlineFormInput" srOnly>
                        Name
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Search..."
                      />
                    </Col>
                    <Col xs="auto">
                      <Button type="submit" className="mb-2 banner__searchBtn">
                        Find Now
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </>
            ) : (
              <h1>Apartment</h1>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
