import React from "react";
import classNames from "classnames";
import "./reset.scss";
import "./common.scss";
import style from "./App.scss";
import Header from "./Component/Header/Header";
import Icon from "./Component/Icon/Icon";
import Footer from "./Component/Footer/Footer";
import Container from "./Component/Container/Container";

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx("app-wrapper")}>
      <Header></Header>
      <Container>
        <div className={cx("poster-wrapper")}>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
        </div>
        <div className={cx("poster-wrapper")}>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
        </div>
        <div className={cx("poster-wrapper")}>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
        </div>
        <div className={cx("poster-wrapper")}>
          <Icon type="poster"></Icon>
        </div>
        <div className={cx("group-wrapper")}>
          <Icon type="group"></Icon>
          <Icon type="group"></Icon>
          <Icon type="group"></Icon>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
