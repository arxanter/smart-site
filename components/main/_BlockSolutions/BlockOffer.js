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
          <h5>Описание</h5>
          <p>{offer.info}</p>
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
        @media (max-width: 1000px) {
        }
        @media (max-width: 650px) {
        }
      `}</style>
    </>
  );
}
