import Slider from 'react-slick';

export default function SliderObjects({ activeObject = {}, portfolio, onChange, refLink }) {
  const sliderObjects = {
    arrows: false,
    dots: false,
    infinity: true,
    autoplay: false,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      const el = portfolio[newIndex];
      onChange(el);
    },
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const changeActiveObject = (el, index) => {
    refLink.current.slickGoTo(index);
  };
  return (
    <>
      <div className="slider-objects">
        <Slider {...sliderObjects} ref={refLink}>
          {portfolio.map((el, index) => {
            return (
              <a
                key={index}
                className={`object-item ${activeObject === el ? '--active' : ''}`}
                onClick={() => {
                  changeActiveObject(el, index);
                }}
              >
                <div className="object-item__picture">
                  <img
                    src={`static/img/_portfolio/${el.imgPreview.src}`}
                    alt={el.imgPreview.alt}
                    className="object-item__img"
                  />
                </div>
                <span>{el.name}</span>
              </a>
            );
          })}
        </Slider>
      </div>
      <style jsx>{`
        .slider-objects {
          width: 100%;
          padding: 40px 0;
          padding-left: 50px;
        }
        .object-item {
          display: block !important;
          cursor: pointer;
          margin: 20px;
        }
        .object-item__img {
          object-fit: cover;
        }
        .object-item__picture {
          display: block;
          width: 350px;
          height: 200px;
        }
        .object-item span {
          font-weight: 700;
          font-size: 14px;
          color: var(--dark-color);
          padding-top: 20px;
          display: block;
        }
        .--active .object-item__picture {
          display: block !important;
          box-sizing: border-box;
          border: 2px solid var(--main-color);
          transform: scale(1.1);
        }
        .object-item.--active span {
          color: var(--main-color);
          position: relative;
          margin-left: 30px;
        }
        .object-item.--active span::before {
          content: '';
          position: absolute;
          width: 30px;
          border: 1px solid var(--main-color);
          left: -40px;
          bottom: 10px;
        }
      `}</style>
    </>
  );
}
