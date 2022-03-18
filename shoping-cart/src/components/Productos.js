import { Component } from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class Productos extends Component {
  render() {
    const { addToCart, products } = this.props;
    return (
      <div style={styles.productos}>
        {products.map((pro) => (
          <Producto addToCart={addToCart} key={pro.name} product={pro} />
        ))}
      </div>
    );
  }
}

export default Productos;
