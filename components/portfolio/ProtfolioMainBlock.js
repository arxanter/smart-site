import Slider from 'react-slick';
import dynamic from 'next/dynamic';
import ControlSlider from '../other/ControlSlider';
import BlockCounts from '../other/BlockCounts';
import React from 'react';
// eslint-disable-next-line
const SliderObjects = dynamic(import('./SliderObjects'), {
  ssr: false,
});
const styleBlockNumbers = {
  width: '100%',
  maxWidth: '450px',
};

export default function ProtfolioMainBlock({ activeObject = {}, portfolio, onChange }) {
  const sliderGallery = {
    arrows: false,
    dots: false,
    infinity: true,
    autoplay: true,
    lazyLoad: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 5000,
  };
  const refSlider = React.createRef();
  return (
    <>
      <header>
        <div className="header__name">
          <h3>
            Объект «<mark className="mark-underline">{activeObject.name}</mark>»
          </h3>
          <div className="controls">
            <ControlSlider color={'black'} size={32}></ControlSlider>
          </div>
        </div>
        <BlockCounts
          left={[activeObject.square + ' кв м', 'площадь']}
          right={[activeObject.leadTime + ' дней', 'срок работ']}
          size={'small'}
          style={styleBlockNumbers}
        ></BlockCounts>
      </header>
      <div className="slider-gallery">
        <Slider {...sliderGallery} ref={refSlider}>
          {activeObject.gallery
            ? activeObject.gallery.map((el, index) => (
                <picture key={index} className="slider-gallery__img">
                  <img src={`/static/img/_portfolio/${el.src}`} alt={el.alt} />
                </picture>
              ))
            : ''}
        </Slider>
        <div className="slider-gallery__controls">
          <ControlSlider
            onLeft={() => {
              refSlider.current.slickPrev();
            }}
            onRight={() => {
              refSlider.current.slickNext();
            }}
            color={'white'}
            size={32}
          ></ControlSlider>
        </div>
      </div>
      <SliderObjects portfolio={portfolio} activeObject={activeObject} onChange={onChange}></SliderObjects>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          max-width: 1600px;
          margin: 0 auto;
          margin-top: 10px;
        }
        .header__name {
          display: flex;
          align-items: center;
          margin-left: 20px;
        }
        .header__name .controls {
          margin-left: 20px;
        }
        .slider-gallery {
          position: relative;
        }
        .slider-gallery__img {
          width: 100%;
          height: 400px;
        }
        .slider-gallery__img img {
          object-fit: cover;
          object-position: center center;
        }
        .slider-gallery__controls {
          position: absolute;
          right: 0;
          bottom: 2px;
          background-color: var(--dark-vis-color);
          padding: 0 20px;
          border-top-left-radius: 5px;
        }
      `}</style>
    </>
  );
}
