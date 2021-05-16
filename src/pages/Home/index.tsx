import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading type="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={(event) => event} isFullWidth>
            See pokemons
          </Button>
          <Button onClick={(event) => event}>See pokemons</Button>
          <Button onClick={(event) => event} isYellow isSmall>
            See pokemons
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
