import { Component } from "react";

const style = {
  logo: {
    fontWeight: "700",
    fontSize: "2rem",
  },
};

class Logo extends Component {
  state = {};
  render() {
    return <div style={style.logo}>Shop with Class</div>;
  }
}

export default Logo;
