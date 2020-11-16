import React from "react";
import { Card, Col } from "react-bootstrap";

const ServiceDetails = ({
  service: { title, img, description },
  serviceID,
}) => {
  return (
    <Col key={serviceID} lg={4} md={6} sm={12}>
      <Card className="service__card">
        <Card.Img
          className="service__cardImg"
          variant="top"
          width="5px"
          src={img}
        />
        <Card.Body className="service__cardBody">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceDetails;
