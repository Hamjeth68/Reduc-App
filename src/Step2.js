import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseEuropeanstandard } from "./rootSlice";
import { Button, Container, Label } from 'reactstrap'
import { Checkbox } from "@mui/material";
import './Step2.css';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';



const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const Europeanstandard = useSelector(state => state.Europeanstandard)
  const { register, handleSubmit } = useForm({ defaultValues: { Europeanstandard } });

  const onSubmit = (data) => {
    dispatch(chooseEuropeanstandard(data.Europeanstandard));
    history.push("./step3");
  };

  return (
    <Container>
      <div className='f-content'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Quality</Label>
          <InputGroup className="mb-3">
            <Checkbox id="Europeanstandard" ref={register} value='Europeanstandard' size='medium'></Checkbox>
            <InputGroup.Text id="inputGroup-sizing-sm">European Standard</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Checkbox id="Average" ref={register} size='medium' value='Average'></Checkbox>
            <InputGroup.Text id="inputGroup-sizing-sm">Average</InputGroup.Text>
          </InputGroup>
          <Button>Next</Button>
        </Form>
      </div>
    </Container >
  );
};

export default Step2;