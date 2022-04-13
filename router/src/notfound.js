import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App = () => {
  const query = useQuery();
  const name = query.get("nombre");
  console.log(name);
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
