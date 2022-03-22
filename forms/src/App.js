import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: "",
    texto: "",
    select: "",
    check: false,
    estado: "feliz",
  });

  const handleChange = ({ target }) => {
    console.log(target.name);
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.check : target.value,
    }));

    // setValue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value);
  return (
    <div>
      <h1>Controlled Components</h1>
      {value.length < 5 ? <h2>Longitud Minima de 5</h2> : null}
      <div>
        <input
          type="text"
          name="normal"
          value={value.normal}
          onChange={handleChange}
        />
        <textarea name="texto" value={value.texto} onChange={handleChange} />

        <select value={value.select} name="select" onChange={handleChange}>
          <option value="">selecione</option>
          <option value="ChanchoFeliz">Chancho Feliz</option>
          <option value="ChanchitoFeliz">Chanchito Feliz</option>
          <option value="ChanchitoTriste">Chanchito Triste</option>
        </select>

        <input
          type="checkbox"
          name="check"
          onChange={handleChange}
          checked={value.check}
        />

        <div>
          <label>Chacho</label>
          <input
            onChange={handleChange}
            type="radio"
            name="estado"
            checked={value.estado === "feliz"}
            value={"feliz"}
          />{" "}
          Feliz
          <input
            onChange={handleChange}
            checked={value.estado === "triste"}
            type="radio"
            name="estado"
            value={"triste"}
          />{" "}
          Triste
          <input
            onChange={handleChange}
            checked={value.estado === "mal"}
            type="radio"
            name="estado"
            value={"mal"}
          />{" "}
          Mal
        </div>
      </div>
    </div>
  );
};

export default App;
