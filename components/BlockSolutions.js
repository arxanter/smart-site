import { useState, useEffect } from 'react';
import BlockOffer from './_BlockSolutions/BlockOffer';

export default function BlockSolutions({ typeOffers = [], offers }) {
  const [activeType, setActiveType] = useState(typeOffers[0].type);
  const [activeOffer, setActiveOffer] = useState({});
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [filteredOffers, setFilteredOffers] = useState([]);

  const filterOffers = () => {
    return offers.filter(el => el.type === activeType);
  };
  /** Effects */
  useEffect(() => {
    const offers = filterOffers();
    setFilteredOffers(offers);
    setActiveOffer(offers[0] || {});
  }, [activeType]);

  useEffect(() => {
    const index = filteredOffers.indexOf(activeOffer);
    if (index !== -1) setActiveOfferIndex(index);
    else setActiveOfferIndex(0);
  }, [activeOffer]);

  /** Components */
  const offersButtons = () => {
    return typeOffers.map((item, index) => (
      <li className="nav-item" key={index}>
        <button
          className={activeType == item.type ? 'btn-primary' : 'btn-secondary-black'}
          onClick={() => {
            setActiveType(item.type);
          }}
        >
          {item.name}
        </button>
      </li>
    ));
  };
  /** Functions */
  const currectCount = value => {
    return value < 9 ? '0' + value : value;
  };
  const changeOffer = direction => {
    if (direction === '+' && activeOfferIndex + 1 < filteredOffers.length) {
      setActiveOffer(filteredOffers[activeOfferIndex + 1]);
    }
    if (direction === '-' && activeOfferIndex > 0) {
      setActiveOffer(filteredOffers[activeOfferIndex - 1]);
    }
  };
  /** Render */
  return (
    <>
      <section className="block__solutions">
        <h2>
          Проекты<mark className="mark-underline">решений</mark>
        </h2>
        <div>
          <nav>
            <ul>{offersButtons()}</ul>
          </nav>
          <div className="container">
            {activeOffer.draftImg ? (
              <img src={`/static/img/${activeOffer.draftImg}`} alt="Иконка стрелки влево" />
            ) : (
              <div style={{ width: '450px' }}></div>
            )}
            <div className="container__offer">
              <div className="offer__header">
                <h3>{activeOffer.name}</h3>
                <div className="offer__header__nav">
                  <button
                    disabled={activeOfferIndex === 0}
                    onClick={() => {
                      changeOffer('-');
                    }}
                    aria-label="Навигация влево"
                  >
                    <img src="/static/icons/_arrows/arrow-left-black.svg" alt="" />
                  </button>
                  <span className="offer__header__counter">
                    {currectCount(activeOfferIndex + 1)}
                    <mark>/{currectCount(filteredOffers.length)}</mark>
                  </span>
                  <button
                    disabled={activeOfferIndex + 1 >= filteredOffers.length}
                    onClick={() => {
                      changeOffer('+');
                    }}
                    aria-label="Навигация вправо"
                  >
                    <img src="/static/icons/_arrows/arrow-right-black.svg" alt="Иконка стрелки вправо" />
                  </button>
                </div>
              </div>
              <BlockOffer offer={activeOffer} />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .container {
          display: flex;
          max-width: 1600px;
          margin: auto;
          padding: 20px;
          justify-content: space-around;
        }
        .container img {
          max-width: 450px;
          padding: 20px 0;
        }
        nav ul {
          display: flex;
          max-width: 800px;
          padding: 0 20px;
          justify-content: space-between;
          margin: auto;
          color: black;
        }
        .container__offer {
          width: 600px;
        }
        .offer__header {
          display: flex;
          max-width: 500px;
          justify-content: space-between;
        }
        .offer__header h3,
        .offer__header span {
          color: var(--dark-color);
        }
        .offer__header__nav {
          display: flex;
          align-items: center;
        }
        .offer__header__nav button {
          width: 28px;
        }
        .offer__header__counter {
          font-size: 24px;
          padding: 0 5px;
        }
        .offer__header__counter mark {
          background-color: transparent;
          font-size: 16px;
        }

        .nav-item button {
          width: 180px;
        }
      `}</style>
    </>
  );
}
