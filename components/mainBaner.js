import MainSlider from './_MainBaner/MainSlider';

const MainBaner = props => {
  return (
    <>
      <div className="main-banner">
        <div className="main-banner__overlay">
          <section className="main-banner__content">
            <h1>
              Системы <mark>Умного дома</mark>
            </h1>
            <p>
              Монтаж и проектирование систем Автоматизации <br /> частных домов и коммерческой недвижимости
            </p>
            <button className="btn-secondary">Заказать проект</button>
          </section>
          <MainSlider {...props} />
        </div>
      </div>
      <style jsx>{`
        .main-banner {
          background-image: url('static/img/bg1.jpg');
          background-position: top center;
        }
        .main-banner__overlay {
          height: 100%;
          background-image: linear-gradient(to bottom, rgba(32, 27, 27, 0.4), var(--dark-color));
          padding-top: 120px;
          padding-bottom: 30px;
        }
        .main-banner__content {
          width: 70%;
          max-width: 900px;
          margin: auto;
          padding: 50px 20px;
          margin-bottom: 60px;
          text-align: center;
          position: relative;
        }
        .main-banner__content::before,
        .main-banner__content::after {
          content: '';
          position: absolute;
          top: 0;
          height: 100%;
          width: 200px;
          max-width: 30%;
          border: 4px solid var(--light-color);
        }
        .main-banner__content::before {
          left: 0;
          border-right: 0;
        }
        .main-banner__content::after {
          right: 0;
          border-left: 0;
        }
        .main-banner__content h1 mark {
          background-color: transparent;
          color: var(--main-color);
        }
        .main-banner__content p {
          font-size: 18px;
          margin: 20px;
        }
        .main-banner__content button {
          position: relative;
          bottom: -5em;
        }
      `}</style>
    </>
  );
};

export default MainBaner;
