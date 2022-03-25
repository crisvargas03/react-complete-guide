import React from "react";
import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Contact Name"}
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <Input
        label={"Contact Lastname"}
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Enter a lastname"
      />
      <Input
        label={"Contact Email"}
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter a email"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
