import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./ApartmentForm.sass";

const ApartmentForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      className="p-4"
      style={{ background: "#F1F6F4", height: "100%" }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Control
            name="name"
            type="text"
            placeholder="Full name"
            ref={register({
              required: "Name is required",
              pattern: {
                value: /[A-Z][a-z]/,
                message: "First text should be capitalized",
              },
              minLength: {
                value: 5,
                message: "Name should be 5 characters",
              },
            })}
          />
          <span style={{ color: "red" }}>
            {errors.name && errors.name.message}
          </span>
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Phone No..."
            className="reviewForm__focus"
            ref={register({
              required: "Phone is required",
              pattern: {
                value: /[0-9]{11}/,
                message: "This field required only number",
              },
              maxLength: {
                value: 11,
                message: "Number should be 11 characters",
              },
            })}
          />
          <span style={{ color: "red" }}>
            {errors.phone && errors.phone.message}
          </span>
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="email"
            type="text"
            placeholder="Email"
            className="reviewForm__focus"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
                message: "Only (@gmail) email required",
              },
            })}
          />
          <span style={{ color: "red" }}>
            {errors.email && errors.email.message}
          </span>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={6}
            name="message"
            type="text"
            placeholder="Message"
            className="reviewForm__focus"
            ref={register({
              required: "Message is required",
              pattern: {
                value: /[A-Z][a-z]/,
                message: "First text should be capitalized",
              },
              minLength: {
                value: 15,
                message: " should be 15 characters",
              },
            })}
          />
          <span style={{ color: "red" }}>
            {errors.message && errors.message.message}
          </span>
        </Form.Group>
        <div className="text-center">
          <Button className="submit__btn" variant="primary" type="submit">
            Request Booking
          </Button>
        </div>
      </Form>
    </Col>
  );
};

export default ApartmentForm;
