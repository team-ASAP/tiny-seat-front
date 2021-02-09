import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./Modal.scss";
import styled from "styled-components";

const cx = classNames.bind(style);

const ModalWrapper = styled.div`
  z-index: ${(props) => (props.isModalActive ? "99" : "-1")};
  transition: all 0.7s ease;
  opacity: ${(props) => (props.isModalActive ? "1" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.55);
`;

const Modal = (props) => {
  const { children, isShow, closeFunc, yesFunc } = props;

  return (
    <ModalWrapper isModalActive={isShow}>
      <div className={cx("modal-contents")}>
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
      </div>
    </ModalWrapper>
  );
};

export default Modal;
