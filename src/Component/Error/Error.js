import React from "react";
import classNames from "classnames/bind";
import style from "./Error.scss";

const cx = classNames.bind(style);

const Error = () => {
  return (
    <div className={cx("error-wrapper")}>
      <div className={cx("error-title")}>오류가 발생했습니다</div>
      <div className={cx("error-copy")}>
        지속적으로 발생할 시 개발자에게 문의해주세요
      </div>
    </div>
  );
};

export default Error;
