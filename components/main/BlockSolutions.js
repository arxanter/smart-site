import { useState, useEffect } from 'react';
import BlockOffer from './_BlockSolutions/BlockOffer';
import ControlSlider from '../other/ControlSlider';

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
        <div className="header">
          <h2>
            Шаблоны <mark className="mark-underline">решений</mark>
          </h2>
          <a className="link-offers" href="">
            Все решения
          </a>
        </div>
        <div>
          <nav>
            <ul>
              {typeOffers.map((item, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={activeType == item.type ? 'btn-primary' : 'btn-secondary--black'}
                    onClick={() => {
                      setActiveType(item.type);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="container">
            {activeOffer.draftImg ? (
              <img src={`/static/img/${activeOffer.draftImg}`} className="img-offer" alt="Схема шаблона" />
            ) : (
              <div style={{ maxWidth: '450px' }}></div>
            )}
            <div className="container__offer">
              <div className="offer__header">
                <h3>{activeOffer.name}</h3>
                <div className="offer__header__nav">
                  <ControlSlider
                    onLeft={changeOffer}
                    onRight={changeOffer}
                    disableLeft={activeOfferIndex === 0}
                    disableRight={activeOfferIndex + 1 >= filteredOffers.length}
                    color={'black'}
                    size={28}
                  >
                    <span className="offer__header__counter">
                      {currectCount(activeOfferIndex + 1)}
                      <mark>/{currectCount(filteredOffers.length)}</mark>
                    </span>
                  </ControlSlider>
                </div>
              </div>
              <BlockOffer offer={activeOffer} />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .block__solutions {
          max-width: 1600px;
          margin: auto;
        }
        .block__solutions .header {
          position: relative;
          max-width: 1200px;
          margin: auto;
        }

        .header .link-offers {
          position: absolute;
          top: 50px;
          right: 20px;
          font-weight: 700;
        }
        .container {
          display: flex;
          margin: auto;
          padding: 20px;
          justify-content: space-around;
        }
        .container .img-offer {
          max-width: 800px;
          width: 50%;
          padding: 20px 0;
        }
        nav ul {
          display: flex;
          max-width: 750px;
          padding: 0 10px;
          justify-content: space-between;
          margin: auto;
          color: black;
        }
        .container__offer {
          width: 600px;
        }
        .offer__header {
          display: flex;
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
        .offer__header__counter {
          font-size: 20px;
          padding: 0 10px;
          padding-bottom: 5px;
        }
        .offer__header__counter mark {
          background-color: transparent;
          font-size: 14px;
        }

        .nav-item button {
          width: 180px;
        }
        @media (max-width: 1000px) {
          .nav-item button {
            width: 180px;
          }
        }
        @media (max-width: 650px) {
          .nav-item button {
            width: 110px;
            font-size: 12px;
          }
          .link-offers {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
