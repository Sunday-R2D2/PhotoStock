import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "./axios";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Contacts from "./components/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    let date = new Date(21, 3, 2019);

    console.log(date);

    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Homepage} />
        <Route path="/contacts" component={Contacts} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddLevels: data => dispatch({ type: "ADD", data })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
