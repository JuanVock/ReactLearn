import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <>
        <h1 className="text-4xl font-extrabold text-center text-primary mb-6">
          Welcome to the Random Number Guesser!
        </h1>
      </>
    );
  }
}

export default Header;
