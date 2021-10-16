import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseSupllierLocation } from "./rootSlice";

export const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const SupllierLocation = useSelector(state => state.SupllierLocation)
  const { register, handleSubmit } = useForm({ defaultValues: { SupllierLocation } });

  const onSubmit = (data) => {
    dispatch(chooseSupllierLocation(data.SupllierLocation));
    history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="SupllierLocation">Pick Sauce:</label>
        <select id="SupllierLocation" name="SupllierLocation" ref={register}>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="UAE">UAE</option>
        </select>
      </div>
      <button>Complete</button>
    </form>
  );
};