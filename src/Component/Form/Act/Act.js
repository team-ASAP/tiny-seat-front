import React, { useState } from "react";
import classNames from "classnames/bind";
import "react-datepicker/dist/react-datepicker.css";
import style from "./Act.scss";
import Input from "../../Input/Input";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button";
import { useEffect } from "react/cjs/react.development";

const cx = classNames.bind(style);

const Act = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1)
  );
  const [sponsorAble, setSponsorAble] = useState(false);
  const [actSeats, setActSeats] = useState([
    <Input className="act-seat-wrapper" key="0">
      <label for="actSeat1">가격</label>
      <div className={cx("input-box")}>
        <input type="text" name="actSeat1" id="actSeat1"></input>
      </div>
      <div className={cx("input-unit")}>석</div>
      <div className={cx("input-box")}>
        <input
          className={cx("text-align-right")}
          type="text"
          name="actPrice1"
          id="actPrice1"
        ></input>
      </div>
      <div className={cx("input-unit")}>원</div>
    </Input>,
  ]);

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

  const actSponsorChange = (e) => {
    const {
      target: { checked },
    } = e;

    setSponsorAble(checked);
  };

  let removeSeat = (id) => {
    console.log(actSeats);
  };

  const addSeat = () => {
    const currentSeat =
      document.querySelectorAll(".act-seat-wrapper").length + 1;
    const addedSeatWithNum = `addedSeat${currentSeat}`;
    const actSeatWithNum = `actSeat${currentSeat}`;
    const actPriceWithNum = `actPrice${currentSeat}`;

    setActSeats(
      actSeats.concat(
        <Input className="act-seat-wrapper" key={currentSeat - 1}>
          <div className={cx("remove-add-seat")}>
            <button onClick={() => removeSeat(currentSeat)}>삭제</button>
          </div>
          <div className={cx("input-box")}>
            <input
              type="text"
              name={actSeatWithNum}
              id={actSeatWithNum}
            ></input>
          </div>
          <div className={cx("input-unit")}>석</div>
          <div className={cx("input-box")}>
            <input
              className={cx("text-align-right")}
              type="text"
              name={actPriceWithNum}
              id={actPriceWithNum}
            ></input>
          </div>
          <div className={cx("input-unit")}>원</div>
        </Input>
      )
    );
  };

  return (
    <div className={cx("act-form-wrapper")}>
      <h2>기본 정보</h2>
      <div className={cx("act-poster")}>
        <label for="actPoster">
          <span className={cx("text-hidden")}>포스터 등록</span>
        </label>
        <input type="file" name="actPoster" id="actPoster"></input>
      </div>
      <div className={cx("act-basic-info")}>
        <Input>
          <label for="actTitle">공연 제목</label>
          <div className={cx("input-box")}>
            <input type="text" name="actTitle" id="actTitle"></input>
          </div>
        </Input>
        <Input>
          <label for="actTermStart">기간</label>
          <DatePicker
            id="actTermStart"
            dateFormat="yyyy/MM/dd"
            locale="ko"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            useWeekdaysShort={true}
            renderCustomHeader={customHeader}
            className={cx("datepicker")}
          />
          <div className={cx("input-connect")}>~</div>
          <DatePicker
            id="actTermEnd"
            dateFormat="yyyy/MM/dd"
            locale="ko"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
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
        <Input>
          <label for="actLocation">장소</label>
          <div className={cx("input-box")}>
            <input type="text" name="actLocation" id="actLocation"></input>
          </div>
        </Input>
        <Input>
          <label for="actActor">출연진</label>
          <div className={cx("input-box")}>
            <input
              type="text"
              name="actActor"
              id="actActor"
              placeholder="콤마(,)로 구분해주세요"
            ></input>
          </div>
        </Input>
        {actSeats}
        <Button>
          <button
            className={cx("type-white", "small", "add-seat")}
            onClick={addSeat}
          >
            좌석 추가
          </button>
        </Button>
      </div>
      <div className={cx("act-additional-info")}>
        <h2>부가 정보</h2>
        <div className={cx("act-description")}>
          <div className={cx("add-photo-box")}>
            <label for="actDesc1">
              <span className={cx("text-hidden")}>공연 정보 사진 등록</span>
            </label>
            <input type="file" name="actDesc1" id="actDesc1"></input>
          </div>
        </div>

        <Input>
          <div className={cx("input-box", "input-checkbox")}>
            <input
              type="checkbox"
              name="actSponsor"
              id="actSponsor"
              onChange={actSponsorChange}
            ></input>
            <label for="actSponsor">후원 여부</label>
          </div>
        </Input>
        <div className={cx("sponsor-info", sponsorAble ? "open" : "")}>
          <Input>
            <label for="sponsorTermStart">후원 기간</label>
            <DatePicker
              id="sponsorTermStart"
              dateFormat="yyyy/MM/dd"
              locale="ko"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              useWeekdaysShort={true}
              renderCustomHeader={customHeader}
              className={cx("datepicker")}
            />
            <div className={cx("input-connect")}>~</div>
            <DatePicker
              id="sponsorTermEnd"
              dateFormat="yyyy/MM/dd"
              locale="ko"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
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
          <Input>
            <label for="sponsorLink">후원 링크</label>
            <div className={cx("input-box")}>
              <input type="text" name="sponsorLink" id="sponsorLink"></input>
            </div>
          </Input>
        </div>
      </div>
    </div>
  );
};

export default Act;
