import React from 'react';
import classNames from 'classnames/bind';
import style from './Input.scss';

const cx = classNames.bind(style);

const Input = ({ children }) => {
	return <div className={cx('input-box')}>{children}</div>;
};

export default Input;
