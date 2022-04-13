import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Proyecto = () => {
  // const match = useRouteMatch();
  // const { proyecto_id } = match.params;
  const params = useParams();
  console.log(params);
  return <h2>proyecto {params.proyecto_id}</h2>;
};

const Portafolio = () => {
  const match = useRouteMatch();
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={`${match.url}/proyecto-1`}>proyecto-1</Link>
        </li>
        <li>
          <Link to={`${match.url}/proyecto-1`}>proyecto-2</Link>
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
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
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
