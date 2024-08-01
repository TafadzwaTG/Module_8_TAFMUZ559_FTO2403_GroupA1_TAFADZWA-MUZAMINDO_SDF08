import React from 'react';
import introImg from '../assets/img/codespace-pets.jpg';

const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        <strong> my project</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">Code Space Pets</p>
      <img src={introImg} alt="Code Space Pets" className="intro__img" />
    </section>
  );
};

export default Intro;