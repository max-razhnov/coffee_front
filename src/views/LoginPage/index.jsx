import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class LoginPage extends Component {
  render() {
    return (
      <>
        <Header isActive={false} />
        <Footer />
      </>
    );
  }
}

export default LoginPage;
