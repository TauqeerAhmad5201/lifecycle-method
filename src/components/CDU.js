import React, { Component } from "react";

export default class CDU extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favcolor: "red",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favcolor: "yellow" });
    }, 5000);
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favcolor;
  }
  render() {
    console.log("Hello from render");
    return (
      <div>
        <h1>My fav color is: {this.state.favcolor}</h1>
        <div id="mydiv"></div>
      </div>
    );
  }
}
