import React from 'react';

import PokeBallPng from './assets/PokeBall.png';
import s from './LoadingBall.module.scss';

const LoadingBall = () => {
  return (
    <div className={s.loadingBall}>
      <img src={PokeBallPng} alt="Pokeball" />
    </div>
  );
};

export default LoadingBall;
