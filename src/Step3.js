import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseWeight } from "./rootSlice";

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const Weight = useSelector(state => state.Weight)
  const { register, handleSubmit } = useForm({ defaultValues: { Weight } });

  const onSubmit = (data) => {
    dispatch(chooseWeight(data.Weight));
    history.push("./step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="Weight">Weight</label>
        <select id="Weight" name="Weight" ref={register}>
          <option value="KG">KG</option>
          <option value="MG">MG</option>
          <option value="G">G</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};