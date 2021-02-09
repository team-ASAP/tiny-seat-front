import React from "react";
import classNames from "classnames";
import style from "./Icon.scss";

const cx = classNames.bind(style);

const Icon = ({ type = "" }) => {
  return (
    <div
      className={cx("icon-box", type)}
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1584448097764-374f81551427?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80")',
      }}
    >
      <a href="javascript:void(0);">
        <div className={cx("icon-title hidden")}>
          <div>TITLE</div>
        </div>
        <div className={cx("icon-title")}>TITLE</div>
      </a>
    </div>
  );
};

export default Icon;
