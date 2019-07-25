export default function BlockMarketing() {
  return (
    <>
      <section className="block-marketing">
        <div className="block-marketing__offer">
          <img className="block-marketing__img" src="/static/img/alisa.png" alt="Голосовой помощник алиса" />
          <div className="block-marketing__desc">
            <span>при заказе до 20 июля</span>
            <h3>Голосовое управление в подарок</h3>
            {/* <button className="btn-secondary">Еще предложения</button> */}
          </div>
        </div>
      </section>
      <style jsx>{`
        .block-marketing {
          background-image: url('/static/img/bg-marketing.png');
          background-size: cover;
        }
        .block-marketing__offer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 800px;
          margin: auto;
          padding: 20px;
        }
        .block-marketing__img {
          width: 200px;
          object-fit: contain;
          flex-shrink: 0;
        }
        .block-marketing__desc {
          padding-left: 60px;
          text-align: left;
        }
        .block-marketing__desc span {
          font-size: 24px;
          font-weight: 500;
          color: var(--main-color);
        }
        .block-marketing__desc h3 {
          font-size: 36px;
          line-height: 1.2em;
          max-width: 420px;
          color: var(--light-color);
        }
        @media (max-width: 650px) {
          .block-marketing__desc {
            padding-left: 20px;
          }
          .block-marketing__desc span {
            font-size: 18px;
          }
          .block-marketing__desc h3 {
            font-size: 18px;
          }

          .block-marketing__img {
            width: 30%;
          }
        }
      `}</style>
    </>
  );
}
