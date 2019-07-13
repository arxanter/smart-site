import { useState } from 'react';
import Slider from 'react-slick';
import CardSystemItem from './_MainSlider/CardSystemItem';

export default function MainSlider(props) {
  const [systemsCount] = useState(props.systemsList ? props.systemsList.length : 1);
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrow: false,
    dots: false,
    infinity: true,
    autoplay: true,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => {
      console.log(newIndex);
    },
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const eventMove = direction => {
    if (direction === '+') sliderRef.slickNext();
    if (direction === '-') sliderRef.slickPrev();
  };
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
            <div className="controls">
              <button
                onClick={() => {
                  eventMove('-');
                }}
                aria-label="Навигация влево"
              >
                <img src="/static/icons/_arrows/arrow-left-white.svg" />
              </button>
              <button
                onClick={() => {
                  eventMove('+');
                }}
                aria-label="Навигация вправо"
              >
                <img src="/static/icons/_arrows/arrow-right-white.svg" />
              </button>
            </div>
          </div>
          <div className="slider__body">
            <Slider {...sliderSettings} ref={c => setSliderRef(c)}>
              {props.systemsList.map((el, index) => (
                <CardSystemItem item={el} isActive={index === props.indexSystem} key={index} />
              ))}
            </Slider>
          </div>
        </section>
      </section>
      <style jsx>{`
        @keyframes load {
          from {
            height: 0;
          }

          to {
            height: 100%;
          }
        }
        .slider {
          display: flex;
          margin-left: 20px;
        }
        .slider__sidebar {
          display: flex;
          width: 3em;
          flex-direction: column;
          align-items: center;
        }
        .slider__count {
          position: relative;
          top: -20px;
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
          top: 75px;
          height: 280px;
          width: 3px;
          margin-right: 0.4em;
          background-color: rgba(255, 255, 255, 0.45);
        }
        .slider__indicator::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: -1.5px;
          width: 6px;
          background-color: var(--main-color);
          opacity: 0.8;
          box-shadow: 0 2px 8px 0 var(--main-color);
          animation-name: load;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        .slider__content {
          height: 100%;
          overflow: hidden;
          margin-left: 40px;
          padding-top: 60px;
          position: relative;
        }
        .slider__navigation {
          display: flex;
          align-items: center;
        }
        .slider__navigation > span {
          font-family: 'Museo Cyrlic', Helvetica, sans-serif;
          font-weight: 500;
          font-size: 24px;
        }
        .slider__navigation .controls {
          height: 26px;
          margin-left: 20px;
          margin-bottom: 5px;
        }
        .slider__navigation .controls button {
          width: 32px;
        }
        .slider__navigation .controls button + button {
          margin-left: 10px;
        }
        .slider__body {
          width: calc(100% + 100px);
        }
      `}</style>
    </>
  );
}
