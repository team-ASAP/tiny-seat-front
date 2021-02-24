import React from "react";
import classNames from "classnames/bind";
import style from "./Main.scss";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const cx = classNames.bind(style);

const Main = () => {
  return (
    <div className={cx("main-wrapper")}>
      <div className={cx("main-act-box")}>
        <h2>최신 등록순</h2>
        <div className={cx("main-list", "act")}>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
        </div>
        <Button>
          <button className={cx("type-white")}>더보기</button>
        </Button>
      </div>
      <div className={cx("main-act-box")}>
        <h2>오픈 임박순</h2>
        <div className={cx("main-list", "act")}>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
          <Icon type="poster"></Icon>
        </div>
        <Button>
          <button className={cx("type-white")}>더보기</button>
        </Button>
      </div>
      <div className={cx("main-group-box")}>
        <h2>창작집단 모아보기</h2>
        <div className={cx("main-list", "group")}>
          <Icon type="group"></Icon>
          <Icon type="group"></Icon>
          <Icon type="group"></Icon>
          <Icon type="group"></Icon>
          <Icon type="group"></Icon>
          <Icon type="group"></Icon>
        </div>
      </div>
    </div>
  );
};

export default Main;
