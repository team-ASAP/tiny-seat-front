import React, { useState } from "react";
import classNames from "classnames";
import "./reset.scss";
import "./common.scss";
import style from "./App.scss";
import Header from "./Component/Header/Header";
import Icon from "./Component/Icon/Icon";
import Error from "./Component/Error/Error";
import Footer from "./Component/Footer/Footer";
import Container from "./Component/Container/Container";
import Modal from "./Component/Modal/Modal";
import Act from "./Component/Form/Act/Act";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./Component/Main/Main";

const cx = classNames.bind(style);

function App() {
  const [isModalShow, setIsModalShow] = useState(false);
  const showModal = () => {
    document.querySelector("html").className = "prevent-scroll";
    setIsModalShow(true);
  };
  const closeModal = () => {
    document.querySelector("html").className = "";
    setIsModalShow(false);
  };
  const yesBtnCallback = () => {
    console.log("yes");
    closeModal();
  };

  return (
    <div className={cx("app-wrapper")}>
      <Router>
        <Header></Header>
        <Container>
          <Route exact path="/" component={Main}></Route>
          <Route path="/act" component={Act}></Route>
        </Container>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
