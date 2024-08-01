import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolio01 from './assets/img/portfolio01.jpg'

const portfolioData = [
  {
    id: 1,
    imgSrc: portfolio01,
    description: 'Project 1 Description',
    link: 'portfolio-item.html'
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="work">
      <h2 className="section__title section__title--portfolio">My Work</h2>
      <div className="portfolio__items">
        {portfolioData.map(item => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;