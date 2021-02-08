import React from 'react';
import classNames from 'classnames';
import './reset.scss';
import './common.scss';
import style from './App.scss';
import Header from './Component/Header/Header';
import Poster from './Component/Poster/Poster';

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx('app-wrapper')}>
      <Header></Header>
      <div className={cx('poster-wrapper')}>
        <Poster></Poster>
        <Poster></Poster>
      </div>
      <div className={cx('poster-wrapper')}>
        <Poster></Poster>
        <Poster></Poster>
      </div>
      <div className={cx('poster-wrapper')}>
        <Poster></Poster>
        <Poster></Poster>
      </div>
      <div className={cx('poster-wrapper')}>
        <Poster></Poster>
      </div>
    </div>
  );
}

export default App;
