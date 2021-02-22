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
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button";
import DateInput from "../../Input/Date/DateInput";

const cx = classNames.bind(style);

const Act = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1)
  );
  const [sponsorAble, setSponsorAble] = useState(false);
  const [actSeats, setActSeats] = useState([{ key: 0, type: "default" }]);
  const [actTerm, setActTerm] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(startDate.getMonth() + 1),
  });
  const [sponsorTerm, setSponsorTerm] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(startDate.getMonth() + 1),
  });

  const actSponsorChange = (e) => {
    const {
      target: { checked },
    } = e;

    setSponsorAble(checked);
  };

  let removeSeat = (id) => {
    const removedList = actSeats.filter((item) => !(item.key === id));
    setActSeats(removedList);
  };

  const addSeat = () => {
    const currentSeatNum = actSeats.length;
    const newSeatObj = { key: currentSeatNum, type: "added" };

    setActSeats(actSeats.concat(newSeatObj));
  };

  return (
    <div className={cx("act-form-wrapper")}>
      <h2>기본 정보</h2>
      <div className={cx("act-poster")}>
        <label htmlFor="actPoster">
          <span className={cx("text-hidden")}>포스터 등록</span>
        </label>
        <input
          type="file"
          name="actPoster"
          id="actPoster"
          accept="image/*"
        ></input>
      </div>
      <div className={cx("act-basic-info")}>
        <Input>
          <label htmlFor="actTitle">공연 제목</label>
          <div className={cx("input-box")}>
            <input type="text" name="actTitle" id="actTitle"></input>
          </div>
        </Input>
        <DateInput
          label="기간"
          connect="~"
          startId="actTermStart"
          endId="actTermEnd"
          startDate={actTerm.startDate}
          endDate={actTerm.endDate}
          setDate={setActTerm}
        ></DateInput>
        <Input>
          <label htmlFor="actLocation">장소</label>
          <div className={cx("input-box")}>
            <input type="text" name="actLocation" id="actLocation"></input>
          </div>
        </Input>
        <Input>
          <label htmlFor="actActor">출연진</label>
          <div className={cx("input-box")}>
            <input
              type="text"
              name="actActor"
              id="actActor"
              placeholder="콤마(,)로 구분해주세요"
            ></input>
          </div>
        </Input>
        {actSeats.map((item, idx) => (
          <Input className="act-seat-wrapper" key={item.key}>
            {item.type === "default" ? (
              <label htmlFor={`actSeat${item.key}`}>가격</label>
            ) : (
              <div className={cx("remove-add-seat")}>
                <button onClick={() => removeSeat(item.key)}>삭제</button>
              </div>
            )}
            <div className={cx("input-box")}>
              <input
                type="text"
                name={`actSeat${item.key}`}
                id={`actSeat${item.key}`}
              ></input>
            </div>
            <div className={cx("input-unit")}>석</div>
            <div className={cx("input-box")}>
              <input
                className={cx("text-align-right")}
                type="text"
                name={`actPrice${item.key}`}
                id={`actPrice${item.key}`}
              ></input>
            </div>
            <div className={cx("input-unit")}>원</div>
          </Input>
        ))}
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
            <label htmlFor="actDesc1">
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
            <label htmlFor="actSponsor">후원 여부</label>
          </div>
        </Input>
        <div className={cx("sponsor-info", sponsorAble ? "open" : "")}>
          <DateInput
            label="후원 기간"
            connect="~"
            startId="sponsorTermStart"
            endId="sponsorTermEnd"
            startDate={sponsorTerm.startDate}
            endDate={sponsorTerm.endDate}
            setDate={setSponsorTerm}
          ></DateInput>
          <Input>
            <label htmlFor="sponsorLink">후원 링크</label>
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
