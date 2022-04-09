import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastName) {
    errors.name = "Requerido";
  } else if (values.lastName.length < 5) {
    errors.name = "El Apellido es muy corto";
  }
  return errors;
};

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => console.log(values),
    validate,
  });

  return (
    <div>
      <h1>App Formik</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Nombre</label>
        <input type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label>Apellido</label>
        <input type="text" {...formik.getFieldProps("lastName")} />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label>Correo Electronico</label>
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App;
