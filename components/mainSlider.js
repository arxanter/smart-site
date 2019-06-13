export default function mainSlider() {
  const count = 3;
  const maxCount = 6;
  return (
    <>
      <section className="slider">
        <aside className="slider__sidebar">
          <span className="slider__count">
            0{count}
            <mark>/ 0{maxCount}</mark>
          </span>
          <div className="slider__indicator" />
        </aside>
        <section className="slider__content">
          <div className="slider__navigation">
            <span>Элементы умного дома</span>
            <div className="slider__navigation__controls">
              <button>
                <img src="/static/icons/arrow-left.svg" />
              </button>
              <button>
                <img src="/static/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
          <div className="slider__body" />
        </section>
      </section>
      <style jsx>{`
        .slider {
          display: flex;
        }
        .slider__sidebar {
          display: flex;
          width: 3em;
          flex-direction: column;
          align-items: center;
        }
        .slider__count {
          width: 80px;
          font-family: Helvetica;
          transform: rotate(-90deg);
          font-size: 2em;
        }
        .slider__count mark {
          position: relative;
          top: -0.5em;
          background-color: inherit;
          color: inherit;
          padding: 2px 5px;
          font-size: 0.5em;
        }
        .slider__count:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: -30px;
          height: 3px;
          width: 25px;
          background-color: rgba(255, 255, 255, 0.45);
        }
        .slider__indicator {
          position: relative;
          left: 1.1em;
          height: 230px;
          width: 3px;
          margin-top: 80px;
          margin-right: 0.4em;
          background-color: rgba(255, 255, 255, 0.45);
        }
        .slider__indicator::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: -1.5px;
          height: calc(200px * ${count} / ${maxCount});
          width: 6px;
          background-color: var(--main-color);
          opacity: 0.8;
          box-shadow: 0 2px 8px 0 var(--main-color);
          transition: 0.5s linear;
        }
        .slider__content {
          height: 100%;
          width: 100%;
          padding: 0 60px;
          padding-top: 60px;
        }
        .slider__navigation {
          display: flex;
          align-items: center;
        }
        .slider__navigation__controls {
          margin-left: 20px;
        }
        .slider__navigation__controls button+ button {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
