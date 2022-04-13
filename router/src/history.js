import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  console.log(history);

  const foward = () => {
    history.goForward();
  };

  const back = () => {
    history.goBack();
  };

  const push = (url) => {
    history.push(url);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <button onClick={back}>back</button>
        <button onClick={foward}>foward</button>
        <button onClick={() => push("/chacho")}>push</button>
        <Switch>
          <Route exact path="/">
            <h1>Inicio</h1>
          </Route>
          <Route path="/perfil">
            <h2>Perfil</h2>
          </Route>
          <Route path="*">404: not found</Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;
