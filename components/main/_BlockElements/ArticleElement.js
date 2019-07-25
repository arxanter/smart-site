import React from 'react';
import ReactMarkdown from 'react-markdown';
import Slider from 'react-slick';
import ControlSlider from '../../other/ControlSlider';
export default function ArticleElement({ article, img, imgGalery, modalCall }) {
  const sliderSettings = {
    arrows: false,
    dots: false,
    infinity: true,
    autoplay: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const refLink = React.createRef();
  function sliderEvent(direction) {
    if (direction === '+') refLink.current.slickNext();
    if (direction === '-') refLink.current.slickPrev();
  }
  return (
    <>
      <article className="container">
        <div className="content">
          <section className="md-section">
            <ReactMarkdown source={article} />
          </section>
          <div className="content__block-action">
            <button
              className="btn-secondary--black"
              onClick={() => {
                modalCall();
              }}
            >
              Получить консультацию
            </button>
          </div>
        </div>
        <aside>
          <div className="content__main-image">
            <img src={`/static/img/${img.src}`} alt={img.alt} />
          </div>
          <div className="slider">
            <ControlSlider onLeft={sliderEvent} onRight={sliderEvent} color={'black'} size={32}>
              <div className="slider__content">
                <Slider {...sliderSettings} ref={refLink}>
                  {imgGalery.map((el, index) => {
                    return (
                      <div className="slider__item" key={index}>
                        <img src={`/static/img/${el.src}`} alt={el.alt} className="slider__image" />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </ControlSlider>
          </div>
        </aside>
      </article>
      <style jsx>{`
        .container {
          display: flex;
          flex-shrink: 0;
          flex-grow: 0;
          width: calc(100% - 60px);
          max-height: 500px;
          margin: 20px;
          padding: 20px 0 20px 20px;
          background-color: var(--main-color);
        }
        .content {
          width: 60%;
          max-width: 450px;
          height: calc(100% - 40px);
          margin-top: 0.5em;
          flex-shrink: 0;
        }
        .content__block-action {
          width: 300px;
          margin: auto;
        }
        .content__block-action button {
          margin: 20px;
        }
        .content__block-action button:hover {
          background-color: var(--dark-color);
          border-color: var(--dark-color);
        }
        .md-section {
          line-height: 1.5;
          padding: 10px 30px;
          height: calc(100% - 40px);
          overflow-y: auto;
          background-color: var(--light-vis-color);
          overscroll-behavior: none;
        }
        .md-section::-webkit-scrollbar {
          background-color: var(--main-vis-color);
          width: 10px;
        }
        .md-section::-webkit-scrollbar-thumb {
          background-color: var(--dark-vis-color);
          border: 2px solid var(--main-vis-color);
          border-radius: 10px;
        }
        aside {
          display: flex;
          width: 50%;
          position: relative;
        }
        .content__main-image {
          position: absolute;
          top: -40px;
          right: -20px;
          width: 85%;
        }
        .slider {
          position: absolute;
          bottom: 60px;
          display: flex;
          width: calc(100% - 20px);
          margin: 0 10px;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .slider__content {
          width: calc(100% - 120px);
          height: 180px;
          margin: 0 10px;
          border: 10px solid var(--light-vis-color);
        }
        .slider__image {
          object-fit: cover;
          height: 180px;
        }
      `}</style>
    </>
  );
}
