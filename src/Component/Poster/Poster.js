import React from 'react';
import classNames from 'classnames';
import style from './Poster.scss';

const cx = classNames.bind(style);

const Poster = () => {
    return (
        <div className={cx('poster-box')} style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1584448097764-374f81551427?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80")'
            }}>
            <div className={cx('poster-title hidden')}><div>만약 이렇게 긴 타이틀이라면</div></div>
            <div className={cx('poster-title')}>만약 이렇게 긴 타이틀이라면</div>
        </div>
    );
};

export default Poster;