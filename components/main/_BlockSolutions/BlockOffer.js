import BlockCounts from '../../other/BlockCounts';
import Link from 'next/link';
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
        <Link href={`/solutions?name=${offer.name}`}>
          <a className="btn-primary article__btn">Подробнее</a>
        </Link>
      </article>
      <style jsx>{`
        article {
          display: flex;
          flex-direction: column;
        }
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
        .article__btn {
          margin: auto;
          width: 250px;
          text-align: center;
          height: 32px;
          line-height: 30px;
          font-size: 16px;
        }
        @media (max-width: 1000px) {
        }
        @media (max-width: 650px) {
        }
      `}</style>
    </>
  );
}
