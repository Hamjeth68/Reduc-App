import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseSupllierLocation } from "./rootSlice";
import { Container, Button, Label } from "reactstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'


const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const SupllierLocation = useSelector(state => state.SupllierLocation)
  const { register, handleSubmit } = useForm({ defaultValues: { SupllierLocation } });

  const onSubmit = (data) => {
    dispatch(chooseSupllierLocation(data.SupllierLocation));
    history.push("./result");
  };

  return (
    <Container className="container-fluid">
      <Label>Choose Supllier Location</Label>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-2">
          <Col md>
            <FloatingLabel htmlFor="SupllierLocation" >
              <Form.Select id="SupllierLocation" name="SupllierLocation" ref={register} aria-label="Floating label select example">
                <option>Select Supllier Location:</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="UAE">UAE</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Button>Next</Button>
      </Form>
    </Container>
  );
};

export default Step4;