export default function BlockPortfolio() {
  const portfolioArray = [
    {
      header: 'Объект 1',
      desc: 'Удобная квартира в Москве',
      src: 'portfolio_1.jpg',
      alt: '',
    },
    {
      header: 'Объект 2',
      desc: 'Удобная квартира в Москве',
      src: 'portfolio_2.jpg',
      alt: '',
    },
    {
      header: 'Объект 3',
      desc: 'Удобная квартира в Москве',
      src: 'portfolio_3.jpg',
      alt: '',
    },
    {
      header: 'Объект 4',
      desc: 'Удобная квартира в Москве',
      src: 'portfolio_4.jpg',
      alt: '',
    },
    {
      header: 'Объект 5',
      desc: 'Удобная квартира в Москве',
      src: 'portfolio_5.jpg',
      alt: '',
    },
    {
      header: 'Объект 6',
      desc: 'Удобная квартира в Москве',
      src: 'portfolio_6.jpg',
      alt: '',
    },
  ];

  return (
    <>
      <section className="block-porfolio">
        <h2>
          Наши<mark className="mark-underline">работы</mark>
        </h2>
        <div className="portfolio__items">
          {portfolioArray.map((el, index) => {
            return (
              <a href="#" className="portfolio__item" key={index}>
                <img src={`/static/img/_portfolio/${el.src}`} alt={el.alt} className="portfolio__item__img"/>  
                <div className="portfolio__item__overlay">
                    <h4>{el.header}</h4>
                    <span>{el.desc}</span>
                </div>
              </a>
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
          margin: 20px;
          overflow: hidden;
        }
        .portfolio__item__img {
          object-fit: cover;
        }
        .portfolio__item__overlay {
          position: absolute;
          visibility: hidden;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          padding-top: 30%;
          background-color: var(--dark-vis-color);
          text-align: center;
        }
        .portfolio__item:hover {
          box-shadow: -4px 4px 0 5px var(--main-color);
          transform: translate(7px, -7px);
          transition: linear 0.4s;
        }
        .portfolio__item:hover .portfolio__item__overlay {
          visibility: visible;
        }
      `}</style>
    </>
  );
}
