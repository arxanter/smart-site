import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import ControlSlider from '../../other/ControlSlider';
export default function ArticleElement({ article, img, imgGalery }) {
  const [indexSliderImage, setIndexSliderImage] = useState(0);
  function sliderEvent(direction) {
    if (direction === '+') setIndexSliderImage(indexSliderImage + 1 < imgGalery.length ? indexSliderImage + 1 : 0);
    if (direction === '-') setIndexSliderImage(indexSliderImage - 1 >= 0 ? indexSliderImage - 1 : imgGalery.length - 1);
  }
  return (
    <>
      <article className="container">
        <div className="content">
          <section className="md-section">
            <ReactMarkdown source={article} />
          </section>
          <div className="content__block-action">
            <button className="btn-secondary-black">Получить консультацию</button>
          </div>
        </div>
        <aside>
          <div className="content__main-image">
            <img src={`/static/img/${img.src}`} alt={img.alt} />
          </div>
          <div className="content__slider">
            <ControlSlider onLeft={sliderEvent} onRight={sliderEvent} color={'black'} size={32}>
              <div className="content__slider__image">
                <img src={`/static/img/${imgGalery[indexSliderImage].src}`} alt={imgGalery[indexSliderImage].alt} />
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
        .content__main-image img {
          object-fit: cover;
        }
        .content__slider {
          position: absolute;
          bottom: 60px;
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
      `}</style>
    </>
  );
}
