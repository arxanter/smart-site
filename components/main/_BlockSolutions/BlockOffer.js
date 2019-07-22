import BlockCounts from '../../other/BlockCounts';
export default function BlockOffer({ offer }) {
  return (
    <>
      <article>
        <BlockCounts
          left={[`${offer.square} кв м`, 'площадь']}
          right={[`${offer.price} руб`, 'стоимость']}
        ></BlockCounts>

        <div className="block-info">
          <h5>Оборудование</h5>
          <p>{offer.brands}</p>
          <h5>Системы</h5>
          <p>{offer.systems}</p>
          <h5>Особенности</h5>
          {Array.isArray(offer.info) ? (
            <ul>
              {offer.info.map((el, index) => {
                return (
                  <li className="list-item block-info__list-item" key={index}>
                    <p>{el}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>{offer.info}</p>
          )}
        </div>
      </article>
      <style jsx>{`
        span,
        h5,
        p {
          color: var(--dark-color);
        }
        .block-info {
          padding: 20px 0;
        }
        .block-info__list-item {
          font-weight: normal;
          font-family: 'Open sans', Helvetica;
        }
        .block-info__list-item:before {
          top: 50%;
        }
        @media (max-width: 1000px) {
        }
        @media (max-width: 650px) {
        }
      `}</style>
    </>
  );
}
