import React from "react";
import classNames from "classnames";
import style from "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faHome,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const Header = () => {
  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header-home")}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      <h1 className={cx("header-title")}>
        <Link to="/">
          작은 객석
          <span>
            <FontAwesomeIcon icon={faChair} />
          </span>
        </Link>
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
