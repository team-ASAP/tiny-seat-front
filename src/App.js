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

const cx = classNames.bind(style);

function App() {
  const [isModalShow, setIsModalShow] = useState(false);
  const showModal = () => {
    setIsModalShow(true);
  };
  const closeModal = () => {
    setIsModalShow(false);
  };
  const yesBtnCallback = () => {
    console.log("yes");
    closeModal();
  };

  return (
    <div className={cx("app-wrapper")}>
      <Header></Header>
      <Container>
        <button onClick={showModal}>모달 띄우기</button>
        <Modal
          isShow={isModalShow}
          closeFunc={closeModal}
          yesFunc={yesBtnCallback}
        >
          <h1>컨텐츠</h1>
          <div>
            팝업 안에 들어갑니다팝업 안에 들어갑니다팝업 안에 들어갑니다팝업
            안에 들어갑니다팝업 안에 들어갑니다팝업 안에 들어갑니다팝업 안에
            들어갑니다팝업 안에 들어갑니다팝업 안에 들어갑니다팝업 안에
            들어갑니다팝업 안에 들어갑니다
          </div>
          <button>버튼도요</button>
        </Modal>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
