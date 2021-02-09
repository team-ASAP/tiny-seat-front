import React from "react";
import classNames from "classnames/bind";
import style from "./Footer.scss";

const cx = classNames.bind(style);

const Footer = () => {
  return (
    <div className={cx("footer-wrapper")}>
      <div>copyright. 2021 Team ASAP</div>
      <div>
        오류/문의사항 <a href="">이메일주소를넣읍시다</a>
      </div>
    </div>
  );
};

export default Footer;
