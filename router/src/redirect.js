import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

const Portafolio = () => {
  const loggedIn = false;
  if (!loggedIn) {
    return <Redirect push to="/" />;
  }
  return <h2>El Portafolio</h2>;
};

const Intro = () => {
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
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Redirect exact from="/" to="/inicio" />
          <Route exact path="/inicio">
            <h1>Inicio</h1>
          </Route>
          <Route path="/perfil">
            <h2>Perfil</h2>
          </Route>
          <Route path="/portafolio">
            <Portafolio />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Intro;
