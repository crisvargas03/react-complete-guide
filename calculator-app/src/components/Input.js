import React from "react";
import { useField } from "formik";
import Styled from "styled-components";

const Control = Styled.div`
  margin-bottom: 20px
`;

const Label = Styled.label`
   color: #000;
   display: block;
   margin-bottom: 5px 

`;

const MyInput = Styled.input`
  outline: none;
  padding: 8px;
  border: solid 1px #b1b3b5;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 5px 
`;

const ErrorMessage = Styled.div`
  color: #f00;
`;

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Control>
      <Label>{label}</Label>
      <MyInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Control>
  );
};

export default Input;
