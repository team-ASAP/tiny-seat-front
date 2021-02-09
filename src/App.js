import React from "react";
import classNames from "classnames";
import "./reset.scss";
import "./common.scss";
import style from "./App.scss";
import Header from "./Component/Header/Header";
import Icon from "./Component/Icon/Icon";

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx("app-wrapper")}>
      <Header></Header>
      <div className={cx("poster-wrapper")}>
        <Icon type="poster"></Icon>
        <Icon type="poster"></Icon>
      </div>
      <div className={cx("poster-wrapper")}>
        <Icon type="poster"></Icon>
        <Icon type="poster"></Icon>
      </div>
      <div className={cx("poster-wrapper")}>
        <Icon type="poster"></Icon>
        <Icon type="poster"></Icon>
      </div>
      <div className={cx("poster-wrapper")}>
        <Icon type="poster"></Icon>
      </div>
      <div className={cx("group-wrapper")}>
        <Icon type="group"></Icon>
        <Icon type="group"></Icon>
        <Icon type="group"></Icon>
      </div>
    </div>
  );
}

export default App;
