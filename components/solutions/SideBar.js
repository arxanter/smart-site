import { useState } from 'react';

export default function SideBar({ offers, typeOffers, activeOffer = {}, onChangeOffer }) {
  const [activeType, setActiveType] = useState(typeOffers[0]);
  const changeActiveType = type => {
    setActiveType(type);
    onChangeOffer(offers.filter(el => el.type === type.type)[0]);
  };
  return (
    <>
      <aside>
        <h5>Проекты решений</h5>
        <nav>
          <ul className="offers-type-list">
            {typeOffers.map((type, index) => {
              return (
                <li key={index}>
                  <button
                    className={`${type.name == activeType.name ? 'btn-primary' : 'btn-secondary-black'} offer-type-btn`}
                    onClick={() => {
                      changeActiveType(type);
                    }}
                  >
                    {type.name}
                  </button>
                  <ul className="offers-list">
                    {type.name == activeType.name
                      ? offers
                          .filter(el => el.type === type.type)
                          .map(offer => {
                            return (
                              <li
                                key={offer.uid}
                                className={`${activeOffer.uid === offer.uid ? '--active' : ''} offer-item`}
                              >
                                <button
                                  onClick={() => {
                                    onChangeOffer(offer);
                                  }}
                                >
                                  {offer.name}
                                </button>
                              </li>
                            );
                          })
                      : ''}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <style jsx>{`
        aside {
          width: 250px;
          padding: 20px 0;
          flex-shrink: 0;
          box-shadow: 10px 0 27px -10px var(--dark-vis-color);
          color: var(--dark-color);
        }
        aside h5 {
          color: var(--dark-color);
          margin-left: 40px;
        }
        .offer-item.--active {
          color: var(--main-color);
          position: relative;
          margin-left: 30px;
        }
        .offer-item.--active::before {
          position: absolute;
          content: '';
          top: 1em;
          left: 10px;
          width: 20px;
          border: 1px solid var(--main-color);
        }
        .offer-item button {
          font-size: 14px;
          margin: 0.6em 0;
          margin-left: 40px;
        }
        .offer-type-btn {
          border-left: none;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          margin: 10px 0;
        }
        .offer-type-btn.btn-primary {
          width: 230px;
        }
        .offer-type-btn.btn-secondary-black {
          width: 160px;
        }
      `}</style>
    </>
  );
}
