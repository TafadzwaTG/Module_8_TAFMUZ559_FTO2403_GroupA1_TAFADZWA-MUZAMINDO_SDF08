import React from 'react';

const PortfolioItem = ({ item }) => {
  return (
    <a href={item.link} className="portfolio__item">
      <img src={item.imgSrc} alt="Portfolio Item" className="portfolio__img" />
      <p className="portfolio__description">{item.description}</p>
    </a>
  );
};

export default PortfolioItem;