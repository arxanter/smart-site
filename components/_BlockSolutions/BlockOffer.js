export default function BlockOffer({ offer }) {
  return (
    <>
      <article>
        <div className="block-numbers">
          <div className="block-numbers__item">
            <span className="main">{offer.square} кв м</span>
            <span>площадь</span>
          </div>
          <div className="block-numbers__item">
            <span className="main">{offer.price} руб</span>
            <span>стоимость</span>
          </div>
        </div>
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
      span, h5, p {
        color: var(--dark-color);
      }
      article {
        font-
      }
      .block-numbers {
        display: flex;
        margin-top: 20px;
        height: 80px;
        background-color: var(--gray-vis-color);
        justify-content: space-around;
      }
      .block-numbers__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: -25px;
      }
      .block-numbers__item span{
        font-size: 22px;
        font-weight: 300;
      }
      .block-numbers__item span.main {
        font-size: 32px;
        font-weight: 300;
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
