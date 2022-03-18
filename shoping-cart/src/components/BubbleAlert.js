import { Component } from "react";

const styles = {
  bubble: {
    backgroundColor: "red",
    borderRadius: "15px",
    color: "#fff",
    padding: "2px 10px",
    fontSize: "0.9rem",
    width: "20px",
  },
};

class BubbleAlert extends Component {
  getNumber(x) {
    if (!x) {
      return " ";
    }
    return x > 9 ? "9+" : x;
  }

  render() {
    const { value } = this.props;
    return <span style={styles.bubble}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;
