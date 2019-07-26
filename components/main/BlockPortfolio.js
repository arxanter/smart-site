import Link from 'next/link';
import { useState, useEffect } from 'react';
import api from '../other/api';

export default function BlockPortfolio() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    api.getPortfolio().then(data => {
      setPortfolio(data);
    });
  }, []);

  return (
    <>
      <section className="block-porfolio">
        <h2>
          Наши <mark className="mark-underline">работы</mark>
        </h2>
        <div className="portfolio__items">
          {portfolio.map((el, index) => {
            return (
              <Link href={`/portfolio?name=${el.name}`} key={index}>
                <a href="#" className="portfolio__item">
                  <img
                    src={`/static/img/_portfolio/${el.imgPreview.src}`}
                    alt={el.imgPreview.alt}
                    className="portfolio__item__img"
                  />
                  <div className="portfolio__item__overlay">
                    <h4>{el.header}</h4>
                    <span>{el.desc}</span>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </section>
      <style jsx>{`
        .block-porfolio {
          padding-bottom: 40px;
        }
        .portfolio__items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .portfolio__item {
          position: relative;
          min-width: 280px;
          max-width: 30%;
          flex-shrink: 2;
          height: 280px;
          margin: 10px;
          overflow: hidden;
          color: var(--light-color);
        }
        a.portfolio__item:hover,
        a.portfolio__item:active {
          opacity: 1;
        }
        .portfolio__item__img {
          object-fit: cover;
        }
        .portfolio__item__overlay {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          visibility: hidden;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: var(--dark-semi-vis-color);
          text-align: center;
        }
        .portfolio__item__overlay h4 {
          color: var(--light-color);
        }
        .portfolio__item:hover {
          box-shadow: -6px 6px 0 0px var(--main-color);
          transform: translate(7px, -7px);
          transition: linear 0.2s;
        }
        .portfolio__item:hover .portfolio__item__overlay {
          visibility: visible;
        }
        @media (max-width: 650px) {
          .portfolio__item {
            min-width: calc(50% - 20px);
            height: 140px;
            margin: 10px;
          }
        }
      `}</style>
    </>
  );
}
