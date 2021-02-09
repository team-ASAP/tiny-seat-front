import React from "react";
import classNames from "classnames/bind";
import style from "./Container.scss";

const cx = classNames.bind(style);

const Container = ({ children }) => {
  return <div className={cx("content-container")}>{children}</div>;
};

export default Container;
