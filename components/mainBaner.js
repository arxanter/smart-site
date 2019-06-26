import MainSlider from './_MainBaner/MainSlider';

const MainBaner = props => {
  return (
    <>
      <div className="main-banner">
        <div className="main-banner__overlay">
          <section className="main-banner__head">
            <h1>
              Системы <mark>Умного дома</mark>
            </h1>
            <p>Монтаж и проектирование систем Автоматизации частных домов и коммерческой недвижимости</p>
            <button className="btn-secondary">Заказать проект</button>
          </section>
          <MainSlider {...props}/>
        </div>
      </div>
      <style jsx>{`
        .main-banner {
          height: 800px;
          background-image: url('static/img/bg1.jpg');
          background-position: top center;
        }
        .main-banner__overlay {
          height: 100%;
          background-image: linear-gradient(to bottom, rgba(32, 27, 27, 0.4), var(--dark-color));
          padding: 30px 0;
        }
        .main-banner__head {
          width: 600px;
          margin: auto;
          padding: 30px;
          margin-bottom: 60px;
          text-align: center;
          position: relative;
        }
        .main-banner__head::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 25%;
          border: 5px solid var(--light-color);
          border-right: 0;
        }
        .main-banner__head::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 25%;
          border: 5px solid var(--light-color);
          border-left: 0;
        }
        .main-banner__head h1 mark {
          background-color: transparent;
          color: var(--main-color);
        }
        .main-banner__head p {
          font-size: 18px;
          margin: 20px;
        }
        .main-banner__head button {
          position: relative;
          bottom: -3.8em;
        }
      `}</style>
    </>
  );
};

export default MainBaner;
