import { Component } from "react";

class App extends Component {
  state = {
    value: 3,
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hello World for class component</p>
        {this.state.value === 3 ? <Button chanchito="feliz" /> : null}
        <button onClick={() => this.setState({ value: 2 })}>send</button>
      </div>
    );
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    console.log("constructo", props);
  }

  componentDidMount() {
    console.log("se monto");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Se actualizo", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("FUIIIIUNN", this.props, this.state);
  }

  render() {
    console.log("Rendering button");
    return <button onClick={() => this.setState({ prop: 1 })}>new send</button>;
  }
}

export default App;
//? Ciclo de vida de un componente:
//? Montando: componentDidMount (uso una vez).
//? Actualizando: componentDidUpdate (multiples veces).
//? Desmontando: compoenntWillUpdate (justo antes de desmontarse el componente)
