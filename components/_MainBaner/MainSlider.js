import { useEffect, useState } from 'react';
import CardSystemItem from './_MainSlider/CardSystemItem';

export default function MainSlider(props) {
  const [systemsCount] = useState(props.systemsList ? props.systemsList.length : 1);
  const [offsetSlider, setOffsetSlider] = useState(0);

  const leftIconPath = () => {
    return `/static/icons/_arrows/arrow-${props.indexSystem === 0 ? 'thin' : 'bold'}-left-white.svg`;
  };
  const rightIconPath = () => {
    return `/static/icons/_arrows/arrow-${props.indexSystem === systemsCount ? 'thin' : 'bold'}-right-white.svg`;
  };
  const eventMove = direction => {
    if (direction === '+' && props.indexSystem + 1 < systemsCount) props.changeIndexSystem(props.indexSystem + 1);
    if (direction === '-' && props.indexSystem - 1 >= 0) props.changeIndexSystem(props.indexSystem - 1);
  };
  useEffect(() => {
    setOffsetSlider(-360 * props.indexSystem);
  });
  return (
    <>
      <section className="slider">
        <aside className="slider__sidebar">
          <span className="slider__count">
            0{props.indexSystem + 1}
            <mark>/ 0{systemsCount}</mark>
          </span>
          <div className="slider__indicator" />
        </aside>
        <section className="slider__content">
          <div className="slider__navigation">
            <span>Элементы умного дома</span>
            <div className="slider__navigation__controls">
              <button
                onClick={() => {
                  eventMove('-');
                }}
                disabled={props.indexSystem === 0}
              >
                <img src={leftIconPath()} />
              </button>
              <button
                onClick={() => {
                  eventMove('+');
                }}
                disabled={props.indexSystem === systemsCount - 1}
              >
                <img src={rightIconPath()} />
              </button>
            </div>
          </div>
          <div className="slider__body">
            {props.systemsList.map((el, index) => (
              <CardSystemItem
                item={el}
                isActive={index === props.indexSystem}
                key={index}
                onChange={() => {
                  props.changeIndexSystem(index);
                }}
              />
            ))}
          </div>
        </section>
      </section>
      <style jsx>{`
        .slider {
          display: flex;
          margin-left: 30px;
        }
        .slider__sidebar {
          display: flex;
          width: 3em;
          flex-direction: column;
          align-items: center;
        }
        .slider__count {
          width: 80px;
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
          bottom: 10px;
          left: -30px;
          height: 3px;
          width: 25px;
          background-color: rgba(255, 255, 255, 0.45);
        }
        .slider__indicator {
          position: relative;
          left: 1.1em;
          height: 240px;
          width: 3px;
          margin-top: 110px;
          margin-right: 0.4em;
          background-color: rgba(255, 255, 255, 0.45);
        }
        .slider__indicator::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: -1.5px;
          height: calc(240px * ${props.indexSystem + 1} / ${systemsCount});
          width: 6px;
          background-color: var(--main-color);
          opacity: 0.8;
          box-shadow: 0 2px 8px 0 var(--main-color);
          transition: 0.5s linear;
        }
        .slider__content {
          height: 100%;
          width: 100%;
          overflow: hidden;
          margin-left: 60px;
          padding-top: 60px;
          position: relative;
        }
        .slider__navigation {
          display: flex;
          align-items: center;
        }
        .slider__navigation__controls {
          margin-left: 20px;
        }
        .slider__navigation__controls button {
          width: 32px;
        }
        .slider__navigation__controls button + button {
          margin-left: 10px;
        }
        .slider__body {
          display: flex;
          position: relative;
          align-items: center;
          margin-top: 20px;
          left: ${offsetSlider}px;
          transition: left 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
