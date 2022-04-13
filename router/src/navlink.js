import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

const Proyecto = () => {
  const match = useRouteMatch();
  const { proyecto_id } = match.params;
  // console.log(params);
  return <h2>proyecto {proyecto_id}</h2>;
};

const Portafolio = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <NavLink
            activeClassName="activado"
            exact
            to={`${match.url}/proyecto-1`}
          >
            proyecto-1
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "red" }}
            exact
            to={`${match.url}/proyecto-2`}
          >
            proyecto-2
          </NavLink>
        </li>
      </ul>
      <div>
        <Switch>
          {/* : => indica que se usara una varible.
           */}
          <Route path={`${match.path}/:proyecto_id`}>
            <Proyecto />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              isActive={(match, location) => {
                return true;
              }}
              exact
              to="/portafolio"
            >
              Portafolio
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path="/">
            <h1>Inicio</h1>
          </Route>
          <Route path="/portafolio">
            <Portafolio />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;
