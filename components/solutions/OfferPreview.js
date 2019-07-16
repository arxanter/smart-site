import BlockCounts from '../other/BlockCounts';
export default function OfferPreview({ offer = {} }) {
  return (
    <>
      <div className="container">
        <img src={`/static/img/${offer.draftImg}`} className="img-offer" alt="Схема шаблона" />
        <div className="container__content">
          <h3>
            Объект <mark className="mark-underline">{offer.name}</mark>
          </h3>
          <BlockCounts
            left={[`${offer.square} кв м`, 'площадь']}
            right={[`${offer.price} руб`, 'стоимость']}
          ></BlockCounts>
          <div className="block-info">
            <h5>Оборудование</h5>
            <p>{offer.brands}</p>
            <h5>Описание</h5>
            <p>{offer.info}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin: 10px 0;
        }
        .img-offer {
          max-width: 50%;
          margin: 0 20px;
        }
        .block-info {
          margin: 20px 10px;
        }
        .container__content {
          width: 100%;
          color: var(--dark-color);
        }
      `}</style>
    </>
  );
}
