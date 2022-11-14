import React from "react";
import { useForm } from "react-hook-form";

function SharedInput({ type,placeholder,name }) {
  const {
      register
  } = useForm();

  return (
      <input
          {...register(`${name}`)}
          name={name} 
          type={type} 
          placeholder={placeholder} />
      );
}

export default SharedInput;
