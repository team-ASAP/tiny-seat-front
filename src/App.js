import React from "react";
import classNames from "classnames";
import "./reset.scss";
import "./common.scss";
import style from "./App.scss";
import Header from "./Component/Header/Header";
import Icon from "./Component/Icon/Icon";
import Error from "./Component/Error/Error";
import Footer from "./Component/Footer/Footer";
import Container from "./Component/Container/Container";

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx("app-wrapper")}>
      <Header></Header>
      <Container>
        <Error></Error>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
