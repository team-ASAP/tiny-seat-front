import React from "react";
import classNames from "classnames/bind";
import style from "./Input.scss";

const cx = classNames.bind(style);

const Input = ({ children, className, id }) => {
  return (
    <div id={id} className={cx("input-wrapper", className)}>
      {children}
    </div>
  );
};

export default Input;
