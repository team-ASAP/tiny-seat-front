import React from "react";
import classNames from "classnames/bind";
import Input from "../Input";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import style from "../Input.scss";

const cx = classNames.bind(style);

const DateInput = ({
  label,
  connect,
  startId,
  endId,
  startDate,
  endDate,
  setDate,
}) => {
  const customHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className={cx("datepicker-header")}>
      <div
        className="btn_month btn_month-prev"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="month-day">
        {getYear(date)}.
        {getMonth(date) < 9 ? "0" + (getMonth(date) + 1) : getMonth(date) + 1}
      </div>

      <div
        className="btn_month btn_month-next"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
  registerLocale("ko", ko);

  return (
    <Input>
      <label htmlFor={startId}>{label}</label>

      <DatePicker
        id={startId}
        dateFormat="yyyy/MM/dd"
        locale="ko"
        selected={startDate}
        onChange={(date) => setDate({ startDate: date, endDate })}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        useWeekdaysShort={true}
        renderCustomHeader={customHeader}
        className={cx("datepicker")}
      />
      <div className={cx("input-connect")}>{connect}</div>
      <DatePicker
        id={endId}
        dateFormat="yyyy/MM/dd"
        locale="ko"
        selected={endDate}
        onChange={(date) => setDate({ startDate, endDate: date })}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        useWeekdaysShort={true}
        renderCustomHeader={customHeader}
        minDate={startDate}
        popperPlacement="bottom-end"
        className={cx("datepicker")}
      />
    </Input>
  );
};

export default DateInput;
