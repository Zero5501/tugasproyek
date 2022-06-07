import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const handleChange = (event) => {
    setPaymentMethod(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/placeorder");
  };
  return (
    <Container>
      <div>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                name="paymentMethod"
                value="Paypal"
                onChange={handleChange}
              ></Form.Check>
            </Col>
            <Col>
            <Form.Check
                type="radio"
                label="Cash"
                name="paymentMethod"
                value="Cash"
                onChange={handleChange}
              ></Form.Check>
              </Col>
              <Col>
            <Form.Check
                type="radio"
                label="Alfamart"
                name="paymentMethod"
                value="Alfamart"
                onChange={handleChange}
              ></Form.Check>
              </Col>
              <Col>
            <Form.Check
                type="radio"
                label="DANA"
                name="paymentMethod"
                value="DANA"
                onChange={handleChange}
              ></Form.Check>
              </Col>
          </Form.Group>

          <Button type="submit" variant="primary" className="my-3">
            Continue
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default PaymentScreen;
