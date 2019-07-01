import { useState, useEffect } from 'react';
import BlockOffer from './_BlockSolutions/BlockOffer';

export default function BlockSolutions({ typeOffers = [], offers }) {
  const [activeType, setActiveType] = useState(typeOffers[0].type);
  const [activeOffer, setActiveOffer] = useState({});
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [filteredOffers, setFilteredOffers] = useState([]);

  const offer = {
    name: 'Объект Вадим Дегтярев',
    square: 180,
    price: '1 460 000',
    brands: 'KNX,Satel, Xxter, MDT, K-bus, RVi',
    systems:
      'Освещение, климат-контроль, шторы, датчики протечек, охранно-пожарная сигнализация, видеонаблюдение, ИБП, электроснабжение, освещение участка, управление поливом',
    info:
      'Электроснабжение, станция бесперебойного электропитания, освещение с регулируемой яркостью, RGBWW (регулирование цвета и цветовой температуры белого), датчики движения в коридорах, комплексное управление отоплением, теплыми полами и кондиционированием, охранно-пожарная сигнализация, видеонаблюдение периметра дома и участка, автоматика освещения и полива участка, сценарии комплексного управления комнатой, этажем, домом, режимы "комфорт", "ожидание", "энергосбережение", управление системами автоматическое, по таймерам, по движению, ручное. Интерфейс пользователя на iPad, iPhone. Удаленный доступ через интернет.',
  };

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
  const buttonLeftIcon = () => {
    const type = activeOfferIndex > 0 ? 'bold' : 'thin';
    return `/static/icons/_arrows/arrow-${type}-left-black.svg`;
  };
  const buttonRightIcon = () => {
    const type = activeOfferIndex < filteredOffers.length ? 'bold' : 'thin';
    return `/static/icons/_arrows/arrow-${type}-right-black.svg`;
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
              <img src={`/static/img/${activeOffer.draftImg}`} alt="" />
            ) : (
              <div style={{ width: '450px' }}></div>
            )}
            <div className="container__offer">
              <div className="offer__header">
                <h3>{offer.name}</h3>
                <div className="offer__header__nav">
                  <button
                    disabled={activeOfferIndex === 0}
                    onClick={() => {
                      changeOffer('-');
                    }}
                  >
                    <img src={buttonLeftIcon()} alt="" />
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
                  >
                    <img src={buttonRightIcon()} alt="" />
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
