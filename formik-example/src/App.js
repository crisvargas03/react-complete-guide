import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import TextInput from "./components/TextInput.jsx";
import CheckBox from "./components/CheckBox";
import Select from "./components/Select.jsx";
import Radios from "./components/Radios.jsx";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastName) {
    errors.lastName = "Requerido";
  } else if (values.lastName.length < 5) {
    errors.lastName = "El Apellido es muy corto";
  }

  if (!values.email) {
    errors.email = "Requerido";
  } else if (values.email.length < 5) {
    errors.email = "El email es muy corto";
  }

  if (!values.radio) {
    errors.radio = "Requerido";
  } else if (values.radio.length < 5) {
    errors.radio = "El radio es muy corto";
  }

  return errors;
};

const App = () => {
  return (
    <Formik
      initialValues={{ name: "", lastName: "", email: "", chancho: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <div>
        <h1>App Formik</h1>
        <Form>
          <TextInput name="name" label="Nombre: " />
          <br />
          {/* Select */}
          <Select label="Tipo de Chancho" name="chancho">
            <option value="">Seleccione un chancho</option>
            <option value="ChachitoFeliz">Chanchito Feliz</option>
            <option value="ChachitoTriste">Chanchito Triste</option>
          </Select>
          <br />
          <TextInput name="lastName" label="Apellido: " />
          <br />
          <TextInput name="email" label="Correo: " />
          <CheckBox name="accept">Aceptar terminos y Condiciones</CheckBox>
          <Radios name="radio" value="chanchito1" label="chanchito1" />
          <Radios name="radio" value="chanchito2" label="chanchito1" />
          <Radios name="radio" value="chanchito2" label="chanchito1" />
          <ErrorMessage name="radio" />
          <button type="submit">Enviar</button>
        </Form>
      </div>
    </Formik>
  );
};

export default App;
