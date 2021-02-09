import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./Modal.scss";
import styled from "styled-components";

const cx = classNames.bind(style);

const ModalWrapper = styled.div`
  z-index: ${(props) => (props.isModalActive ? "99" : "-1")};
  transition: all 0.5s ease;
  opacity: ${(props) => (props.isModalActive ? "1" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.55);
`;

const ModalContents = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: ${(props) => props.width || "400px"};
  padding: 20px 15px;
  text-align: left;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 0 70px rgba(0, 0, 0, 0.4);
`;

const Modal = (props) => {
  const { children, isShow, closeFunc, yesFunc } = props;

  const clickBackground = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeFunc();
    }
  };

  return (
    <ModalWrapper isModalActive={isShow} onClick={clickBackground}>
      <ModalContents width="500px" id="modelContents">
        <button
          className={cx("modal-close-x-btn")}
          id="closePopBtn"
          onClick={closeFunc}
        ></button>
        {children}
        <div className={cx("modal-btn-wrapper")}>
          <button className={cx("modal-btn no")} onClick={closeFunc}>
            아니오
          </button>
          <button className={cx("modal-btn yes")} onClick={yesFunc}>
            예
          </button>
        </div>
      </ModalContents>
    </ModalWrapper>
  );
};

export default Modal;
