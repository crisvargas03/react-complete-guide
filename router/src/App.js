import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
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
