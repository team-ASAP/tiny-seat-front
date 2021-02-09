import React from "react";
import classNames from "classnames";
import style from "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faHome,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

const Header = () => {
  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header-home")}>
        <a href="">
          <FontAwesomeIcon icon={faHome} />
        </a>
      </div>
      <h1 className={cx("header-title")}>
        <a href="">
          작은 객석
          <span>
            <FontAwesomeIcon icon={faChair} />
          </span>
        </a>
      </h1>
      <div className={cx("header-add")}>
        <button>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  );
};

export default Header;
