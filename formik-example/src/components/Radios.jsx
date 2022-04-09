import React from "react";
import { useField } from "formik";

const Radios = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label>
        <input type="radio" {...field} {...props} />
        {label}
      </label>
    </div>
  );
};

export default Radios;
