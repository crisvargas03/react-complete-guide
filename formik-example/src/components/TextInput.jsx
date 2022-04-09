import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  // console.log({ field, meta });
  return (
    <div>
      <label>{label}</label>
      <input {...field} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
