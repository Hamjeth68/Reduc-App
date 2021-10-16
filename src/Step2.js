import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseEuropeanstandard } from "./rootSlice";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="Europeanstandard">Quality</label>
        <select id="Europeanstandard" name="Europeanstandard" ref={register}>
          <option value="Europeanstandard">European standard</option>
          <option value="Average">Average</option>
          {/* <option value="filled_crust">Filled Crust</option> */}
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};

export default Step2;