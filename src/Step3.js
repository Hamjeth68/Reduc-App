import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseWeight } from "./rootSlice";
import { Container, Button, Label } from "reactstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import './Step3.css'

const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const Weight = useSelector(state => state.Weight)
  const { register, handleSubmit } = useForm({ defaultValues: { Weight } });

  const onSubmit = (data) => {
    dispatch(chooseWeight(data.Weight));
    history.push("./step4");
  };

  return (
    <Container className="container-fluid">
      <Label>Choose Packing Weight</Label>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Packing Weight">
              <Form.Control id='Weight' type="number" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="Weight" >
              <Form.Select id="Weight" name="Weight" ref={register} aria-label="Floating label select example">
                <option>Select Weight:</option>
                <option value="KG">Kilograms</option>
                <option value="MG">Milligrams</option>
                <option value="G">Grams</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Button>Next</Button>
      </Form>
    </Container>
  );
};

export default Step3;