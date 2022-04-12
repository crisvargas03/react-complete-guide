import React, { createContext, useContext, useState } from "react";

const Context = createContext({ valor: false, toogle: () => {} });

const Provider = ({ children }) => {
  const [valor, setValor] = useState(false);
  const value = {
    valor,
    toogle: () => setValor(!valor),
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Componente = () => {
  const { valor, toogle } = useContext(Context);
  return (
    <div>
      <label>{valor.toString()}</label>
      <button onClick={toogle}>Toogle</button>
    </div>
  );
};

const App = () => {
  return (
    <Provider>
      <Componente />
    </Provider>
  );
};

export default App;
