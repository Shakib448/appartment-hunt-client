import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HotelIcon from "@material-ui/icons/Hotel";
import BathtubIcon from "@material-ui/icons/Bathtub";
import { Button, Card, Col } from "react-bootstrap";

const MapHouseRent = ({
  house: { img, title, price, location, bathRoom, bed },
  houseID,
}) => {
  return (
    <Col key={houseID} lg={4} md={6} sm={12}>
      <Card style={{ border: "none" }} className="houseRent__card mt-2 mb-2">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card__title">{title}</Card.Title>
          <Card.Text className="font-weight-bold text-secondary">
            <LocationOnIcon className="cardIcon" /> {location}
          </Card.Text>
          <div className="houseRent__cardBody">
            <Card.Text>
              <HotelIcon className="cardIcon" /> {bed}
            </Card.Text>
            <Card.Text>
              <BathtubIcon className="cardIcon" /> {bathRoom}
            </Card.Text>
          </div>
          <div className="card__footer">
            <div className="card__price">${price}</div>
            <Button className="card__button" variant="primary">
              View Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MapHouseRent;
