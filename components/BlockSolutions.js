import BlockOffer from './_BlockSolutions/BlockOffer';

export default function BlockSolutions() {
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
  return (
    <>
      <section className="block__solutions">
        <h2>
          Проекты<mark className="mark-underline">решений</mark>
        </h2>
        <div>
          <nav>
            <ul>
              <li className="nav-item">
                <button className="btn-primary">Частный дом</button>
              </li>
              <li className="nav-item">
                <button className="btn-secondary-black">Квартира</button>
              </li>
              <li className="nav-item">
                <button className="btn-secondary-black">Гостиница</button>
              </li>
            </ul>
          </nav>
          <div className="container">
            <img src="/static/img/_solutions/solution_1.png" alt="" />
            <div className="container__offer">
              <div className="offer__header">
                <h3>{offer.name}</h3>
                <div className="offer__header__nav">
                  <button>
                    <img src="/static/icons/_arrows/arrow-thin-left-black.svg" alt="" />
                  </button>
                  <span className="offer__header__counter">
                    01<mark>/06</mark>
                  </span>
                  <button>
                    <img src="/static/icons/_arrows/arrow-bold-right-black.svg" alt="" />
                  </button>
                </div>
              </div>
              <BlockOffer offer={offer} />
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
