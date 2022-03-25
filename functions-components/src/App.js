// //* Hook for control the state of our react-app.
// //! Hooks Rules:
// //? no se pueden llamar en loops, ni condiciones.
// //? solo se llaman en 2 partes:
// //? componentes de react (funcionales)
// //? custom hooks (cuando creemos custom hooks [use*talnombre])

// //! Custom Hook!!
// const useCounter = (initial) => {
//   //* useState Hook
//   const [counter, setCounter] = useState(initial);
//   const incrementar = () => {
//     setCounter(counter + 1);
//   };

//   return [counter, incrementar];
// };

// const Interval = ({ contador }) => {
//   useEffect(() => {
//     const i = setInterval(() => console.log(contador), 1000);
//     return () => clearInterval(i);
//   }, [contador]);

//   return <p>Invervalo</p>;
// };

// function App() {
//   const [counter, incrementar] = useCounter(0);

//   //* UseEffect
//   //* para que se ejecute siempre que se renderice un componente no pasamos el 2do param etro de la funcion,
//   //* para que se ejecute una ves [] pasamos el arreglo vacio.
//   //* para ejecutarlo cuando una variable en espfico se cambie, la pasamos dentro del arreglo, [variable].
//   useEffect(() => {
//     document.title = counter;
//   }, [counter]);

//   return (
//     <div className="App">
//       <h1>Primer hook (useState)</h1>
//       Counter: {counter}
//       <button onClick={incrementar}>+</button>
//       <Interval contador={counter} />
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import React, { useReducer, useState } from "react";
// import "./App.css";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "incrementar":
//       return { contador: state.contador + 1 };

//     case "decrementar":
//       return { contador: state.contador - 1 };

//     case "set":
//       return { contador: action.payload };

//     default:
//       return state;
//   }
// };

// const inicial = { contador: 0 };

// const App = () => {
//   //action = { type: string, payload: any }

//   const [state, dispatch] = useReducer(reducer, inicial);
//   const [valor, setValor] = useState(0);
//   return (
//     <div className="App">
//       <h1>App</h1>
//       <p>contador: {state.contador}</p>
//       <input value={valor} onChange={(e) => setValor(e.target.value)} />
//       <button onClick={() => dispatch({ type: "incrementar" })}> + </button>
//       <button onClick={() => dispatch({ type: "decrementar" })}> - </button>
//       <button onClick={() => dispatch({ type: "set", payload: valor })}>
//         set
//       </button>
//     </div>
//   );
// };

// export default App;

import React, { useRef } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();
  const click = () => {
    console.log(ref.current.clientHeight);
  };
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default App;
