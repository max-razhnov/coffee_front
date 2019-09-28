import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageTitle from "../../modules/PageTitle";
import SectionInfo from "../../modules/SectionInfo";
import Button from "../../components/Button";
// import TelegramLoginButton from "../../helpers/TelegramLoginButton";

class LoginPage extends Component {
  render() {
    return (
      <>
        <Header isActive={false} />
        <PageTitle
          title="Get your own kick off"
          subTitle="with Wargaming S&C"
        />
        <SectionInfo title="Use Telegram to be aware of upcoming meets and manage subscriptions:" />
        <Button text="Log in via Telegram" type={}/>
        <Footer />
      </>
    );
  }
}

export default LoginPage;
