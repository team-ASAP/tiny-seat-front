import React, { useState } from 'react';
import classNames from 'classnames/bind';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Act.scss';
import Input from '../../Input/Input';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

const Act = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date().setMonth(startDate.getMonth() + 1));
	const customHeader = ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
		<div className={cx('datepicker-header')}>
			<div className="btn_month btn_month-prev" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</div>
			<div className="month-day">
				{getYear(date)}.{getMonth(date) < 9 ? '0' + (getMonth(date) + 1) : getMonth(date) + 1}
			</div>

			<div className="btn_month btn_month-next" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
				<FontAwesomeIcon icon={faChevronRight} />
			</div>
		</div>
	);

	registerLocale('ko', ko);
	return (
		<div className={cx('act-form-wrapper')}>
			<div className={cx('act-poster')}>
				<label for="actPoster">
					<span className={cx('text-hidden')}>포스터 등록</span>
				</label>
				<input type="file" name="actPoster" id="actPoster"></input>
			</div>
			<div className={cx('act-basic-info')}>
				<Input>
					<label for="actTitle">공연 제목</label>
					<div className={cx('input-box')}>
						<input type="text" name="actTitle" id="actTitle"></input>
					</div>
				</Input>
				<Input>
					<label for="actTerm">기간</label>
					<DatePicker
						dateFormat="yyyy/MM/dd"
						locale="ko"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						useWeekdaysShort={true}
						renderCustomHeader={customHeader}
						className={cx('datepicker')}
					/>
					<div className={cx('input-connect')}>~</div>
					<DatePicker
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
						className={cx('datepicker')}
					/>
				</Input>
				<Input>
					<label for="actLocation">장소</label>
					<div className={cx('input-box')}>
						<input type="text" name="actLocation" id="actLocation"></input>
					</div>
				</Input>
				<Input>
					<label for="actActor">출연진</label>
					<div className={cx('input-box')}>
						<input type="text" name="actActor" id="actActor" placeholder="콤마(,)로 구분해주세요"></input>
					</div>
				</Input>
			</div>
		</div>
	);
};

export default Act;
