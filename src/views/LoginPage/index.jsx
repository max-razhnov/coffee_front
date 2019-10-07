import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageTitle from "../../modules/PageTitle";
import SectionInfo from "../../modules/SectionInfo";
import Button from "../../components/Button";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingData: false
    };
  }
  render() {
    return (
      <>
        <Header isActive={false} />
        <PageTitle
          title="Get your own kick off"
          subTitle="with Wargaming S&C"
        />
        <SectionInfo title="Use Telegram to be aware of upcoming meets and manage subscriptions:" />
        <Button
          text="Log in via Telegram"
          disabled={false}
          type={"primary"}
          onClick={() => {
            this.props.history.push("/teams");
          }}
        />
        <Footer />
      </>
    );
  }
}

export default LoginPage;
