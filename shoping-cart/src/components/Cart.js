import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetailsCart from "./DetailsCart";

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 15,
    top: 25,
  },
};

class Cart extends Component {
  render() {
    const { cart, esCarroVisible, showCart } = this.props;
    const cantidad = cart.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={showCart} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetailsCart cart={cart} /> : null}
      </div>
    );
  }
}

export default Cart;
