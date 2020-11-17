import React from "react";
import { Col, Card } from "react-bootstrap";
import test from "../../images/Rectangle 396.png";
import "./ApartmentDetails.sass";

const ApartmentDetails = () => {
  return (
    <Col lg={8} md={6} sm={12} className="mb-5">
      <Card className="apartmentDetails__card">
        <Card.Img variant="top" src={test} />
        <Card.Body>
          <div className="apartmentDetails__title">
            <Card.Title>
              <h3 className="font-weight-bold">Family Apartment Three</h3>
            </Card.Title>
            <Card.Title>
              <h3 className="font-weight-bold">$256</h3>
            </Card.Title>
          </div>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            ipsa, blanditiis iusto sunt rerum aut vitae exercitationem sed ullam
            praesentium, repellat consequatur. Excepturi sed, pariatur dolore
            laboriosam, ab repellat esse neque sit illum libero adipisci enim,
            cum dolorem est? Quia nesciunt officia voluptatem eos omnis debitis
          </Card.Text>
          <h3 className="font-weight-bold" style={{ color: "#275A53" }}>
            Price Details -{" "}
          </h3>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
            ipsa, blanditiis iusto sunt rerum aut vitae exercitationem sed ullam
            praesentium, repellat consequatur. Excepturi sed, pariatur dolore
            laboriosam, ab repellat esse neque sit illum libero adipisci enim,
            cum dolorem est? Quia nesciunt officia voluptatem eos omnis debitis
          </Card.Text>
          <h3 className="font-weight-bold" style={{ color: "#275A53" }}>
            Property Details -
          </h3>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem minus, illo hic doloremque laudantium, et nam suscipit,
            minima voluptates officiis eos consequuntur blanditiis quas autem.
            Quasi repudiandae iusto assumenda voluptatibus, placeat in, facere
            aliquid quaerat doloremque libero doloribus unde accusamus
            perferendis, cupiditate nam qui nostrum veritatis ullam. Quisquam
            temporibus voluptates inventore dolorum. Ab dolorem nostrum facilis
            earum voluptatum delectus, explicabo aliquid quod voluptate at
            laudantium quo sint quam quisquam. Quod aut adipisci consectetur
            iste facilis eaque quos fugiat exercitationem labore itaque, debitis
            recusandae, pariatur est quasi voluptatum veritatis earum ratione
            hic quo iusto cumque corrupti quae? In perferendis cupiditate
            reprehenderit quia sit omnis, mollitia nihil consectetur? Alias
            eligendi, qui, dolorem quisquam molestias nobis ab sequi repellendus
            odit minus totam iusto modi. Rem sequi cum asperiores animi, nihil
            ab cumque sint fugiat nisi. Architecto quisquam, doloremque eum
            necessitatibus numquam explicabo fugit, tempore similique ipsum
            aspernatur ullam deleniti minima quibusdam totam illum delectus
            nesciunt eveniet quas iusto quod at recusandae labore praesentium
            reprehenderit? Quia corrupti odio, saepe molestias numquam maxime
            nostrum, suscipit, quisquam eum rerum consectetur illum consequuntur
            voluptas obcaecati ipsa similique quaerat repellat dolores incidunt
            aut fuga beatae itaque facere! Maiores possimus animi, enim fuga,
            repudiandae veniam cumque maxime, deleniti hic beatae dolore
            inventore cupiditate! Natus tempora officiis at commodi blanditiis
            distinctio quod earum, quam atque et velit hic minima beatae iste
            quidem quos asperiores in odio. Odio nemo fugiat provident
            consectetur iure mollitia, dolores tempora. Libero rerum voluptas
            quibusdam ducimus maxime sit provident, neque asperiores facilis. Ex
            delectus recusandae impedit eius, ratione vitae libero sint
            explicabo debitis modi, unde doloremque at totam dolores, incidunt
            adipisci fugit neque voluptate dolorum! Ab itaque doloribus aliquam
            maxime, laborum a quisquam modi eaque ipsam non nulla nobis dolorem
            magnam sapiente eos voluptas ratione? Voluptas numquam similique
            vitae, dolores harum dolore mollitia nostrum sapiente, natus quasi,
            culpa quam vero. Consequatur architecto tempore nostrum?
            Necessitatibus accusamus in esse iste debitis voluptatibus illum
            sint omnis magnam, officia nobis, tenetur perferendis quibusdam. Ut
            repellat recusandae natus soluta? Cum mollitia distinctio facere
            numquam enim dicta porro assumenda sapiente officia, totam labore
            repellendus atque ipsa tempore dolores suscipit itaque ratione
            molestias exercitationem vitae culpa. In error necessitatibus
            perspiciatis amet rerum odio, tempore possimus temporibus
            praesentium harum eius exercitationem eum soluta maiores nisi nam
            sequi quos. Asperiores animi ipsa totam ratione itaque corporis
            voluptate! Pariatur dolores, expedita neque, illum numquam vitae
            assumenda temporibus earum, quo minima incidunt? Id, provident
            cupiditate.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ApartmentDetails;
