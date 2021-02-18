import React from "react";
import classNames from "classnames/bind";
import style from "./Button.scss";

const cx = classNames.bind(style);

const Button = ({ children, className }) => {
  return <div className={cx("button-wrapper", className)}>{children}</div>;
};

export default Button;
