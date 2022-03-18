import { Component } from "react";
import "./App.css";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    products: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Lechuga", price: 1500, img: "/productos/lechuga.jpg" },
      { name: "Arbejas", price: 1500, img: "/productos/arbejas.jpg" },
    ],
    carro: [
      // { name: "Tomate", price: 1500, img: "/productos/tomate.jpg", cantidad: 1 },
    ],

    esCarroVisible: false,
  };

  addToCart = (producto) => {
    //console.log(producto);
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  showCart = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    // console.log(this.state.carro);
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          cart={this.state.carro}
          esCarroVisible={esCarroVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Productos
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
