import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.sass";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import facebook from "../../../logos/Vector.png";
import instagram from "../../../logos/Vector-1.png";
import likening from "../../../logos/Vector-2.png";
import youtube from "../../../logos/Vector-3.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12} style={{ display: "flex" }}>
            <div>
              <LocationOnIcon style={{ marginRight: "15px", color: "white" }} />
            </div>
            <ul className="footer__details">
              <li>H#340(4th Floor), Road #24</li>
              <li>New DOHS, Mohakhali, Dhaka, Bangladesh</li>
              <li>Phone : 018*********</li>
              <li>E-mail : info@company.com</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <ul className="footer__details">
              <li>
                <h4>Company</h4>
              </li>
              <li>About</li>
              <li>Site Map</li>
              <li>support Center</li>
              <li>Terms Conditions</li>
              <li>Submit Listing</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <ul className="footer__details">
              <li>
                <h4>Quick Links</h4>
              </li>
              <li>Quick Links</li>
              <li>Rentails</li>
              <li>Sales</li>
              <li>Contact</li>
              <li>Terms Conditions</li>
              <li>Our Blog</li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <ul className="footer__details">
              <li>
                <h4>About us</h4>
              </li>
              <li>
                We are the top real estate agency in Sydney. With agents
                available to answer any question 24/7.
              </li>
              <ul className="footer__icon">
                <li>
                  <img src={facebook} width="30px" alt="socialLink" />
                </li>
                <li>
                  <img src={instagram} width="30px" alt="socialLink" />
                </li>
                <li>
                  <img src={likening} width="30px" alt="socialLink" />
                </li>
                <li>
                  <img src={youtube} width="30px" alt="socialLink" />
                </li>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
