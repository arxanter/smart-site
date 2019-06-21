export default function BlockMarketing() {
  return (
    <>
      <section className="block-marketing">
        <div className="block-marketing__offer">
          <img className="block-marketing__img" src="/static/img/alisa.png" alt="" />
          <div className="block-marketing__desc">
            <span>При заказе до 20 июля</span>
            <h3>Голосовое управление в подарок</h3>
            <button className="btn-secondary">Еще предложения</button>
          </div>
        </div>
      </section>
      <style jsx>{`
        .block-marketing {
          background-image: url('/static/img/marketing.png');
          background-size: cover;
        }
        .block-marketing__offer {
          max-width: 1200px;
          margin: auto;
          height: 350px;
          display: flex;
          padding: 20px;
          align-items: center;
        }
        .block-marketing__img {
          width: 250px;
          height: 250px;
          flex-shrink: 0;
          object-fit: cover;
        }
        .block-marketing__desc {
          padding-left: 60px;
          text-align: left;
        }
        .block-marketing__desc span {
          color: var(--main-color);
        }
        .block-marketing__desc h3 {
          font-size: 28px;
        }
      `}</style>
    </>
  );
}
