import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

export default function ArticleElement({ article, img, imgGalery }) {
  const [indexSliderImage, setIndexSliderImage] = useState(0);
  function sliderEvent(direction) {
    if (direction === '+') setIndexSliderImage(indexSliderImage + 1 < imgGalery.length ? indexSliderImage + 1 : 0);
    if (direction === '-') setIndexSliderImage(indexSliderImage - 1 >= 0 ? indexSliderImage - 1 : imgGalery.length - 1);
  }
  return (
    <>
      <article className="container">
        <section className="content md-section">
          <ReactMarkdown source={article} />
        </section>
        <aside>
          <div className="content__main-image">
            <img src={`/static/img/${img}`} alt="" />
          </div>
          <div className="content__slider">
            <button
              onClick={() => {
                sliderEvent('-');
              }}
            >
              <img src="/static/icons/_arrows/arrow-bold-left-black.svg" />
            </button>
            <div className="content__slider__image">
              <img src={`/static/img/${imgGalery[indexSliderImage]}`} alt="" />
            </div>
            <button
              onClick={() => {
                sliderEvent('+');
              }}
            >
              <img src="/static/icons/_arrows/arrow-bold-right-black.svg" />
            </button>
          </div>
        </aside>
      </article>
      <style jsx>{`
        .container {
          display: flex;
          flex-shrink: 0;
          flex-grow: 0;
          width: calc(100% - 60px);
          margin: 20px;
          padding: 20px 0 20px 20px;
          background-color: var(--main-color);
        }
        .content {
          width: 50%;
          max-width: 400px;
          height: calc(100% - 60px);
          padding: 20px;
          margin-top: 0.5em;
          line-height: 1.5;
          overflow-y: scroll;
          flex-shrink: 0;
          background-color: var(--light-vis-color);
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
          width: 100%;
        }
        .content__main-image img {
          object-fit: cover;
        }
        .content__slider {
          position: absolute;
          bottom: 20px;
          display: flex;
          width: calc(100% - 20px);
          margin: 0 10px;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .content__slider__image {
          width: calc(100% - 40px);
          height: 180px;
          margin: 0 5px;
          border: 10px solid var(--light-vis-color);
        }
        .content__slider__image img {
          object-fit: cover;
          transition: 0.2s ease-out;
        }
        .content__slider button {
          width: 32px;
        }
      `}</style>
    </>
  );
}
