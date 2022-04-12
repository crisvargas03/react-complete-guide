import React, { createContext, useContext } from "react";

const Context = createContext("default value");

const Provider = ({ children }) => {
  return <Context.Provider value={"mi valor"}>{children}</Context.Provider>;
};

const Contenido = () => {
  const ctx = useContext(Context);
  return <div>{ctx}</div>;
};

const App = () => {
  return (
    <div>
      <Provider>
        <Contenido />
      </Provider>
    </div>
  );
};

export default App;
