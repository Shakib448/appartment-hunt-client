import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Service.sass";
import img1 from "../../../logos/affordable 1.png";
import img2 from "../../../logos/apartment 1.png";
import img3 from "../../../logos/lessee 1.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Service = () => {
  const serviceDetails = [
    {
      img: img1,
      title: "Wide Range of Properties",
      description:
        "With a robust selection of popular properties on hand as ell as leading properties from experts",
    },
    {
      img: img2,
      title: "Financial Made Easy",
      description:
        "Our stress-free finance department that can find financial solutions to save you money",
    },
    {
      img: img3,
      title: "Trusted By Thousands",
      description:
        "10 new offers every day 350 offers on site trusted by a community of thousand of user",
    },
  ];
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
        <Row className="justify-content-center">
          {serviceDetails.map((service, serviceID) => (
            <ServiceDetails service={service} serviceID={serviceID} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
