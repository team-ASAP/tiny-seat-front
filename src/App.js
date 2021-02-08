import React from 'react';
import classNames from 'classnames';
import './reset.scss';
import './common.scss';
import style from './App.scss';
import Header from './Component/Header/Header';

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx('app-wrapper')}>
      <Header></Header>
    </div>
  );
}

export default App;
