import React from "react";
import classNames from "classnames/bind";
import style from "./Button.scss";

const cx = classNames.bind(style);

const Button = ({ children }) => {
  return <div className={cx("button-wrapper")}>{children}</div>;
};

export default Button;
