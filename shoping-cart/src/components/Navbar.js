import { Component } from "react";
import Cart from "./Cart";
import Logo from "./Logo";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "80px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};

class Navbar extends Component {
  render() {
    const { cart, esCarroVisible, showCart } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Cart cart={cart} esCarroVisible={esCarroVisible} showCart={showCart} />
      </nav>
    );
  }
}

export default Navbar;
