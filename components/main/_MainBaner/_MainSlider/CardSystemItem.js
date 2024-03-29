import { Link as ScrollLink } from 'react-scroll';

export default function CardSystemItem(props) {
  const fullIconAlias = `/static/icons/_elements/${props.item.iconAlias}`;
  return (
    <>
      <div className={`card ${props.isActive ? 'card--active' : ''}`}>
        <div className="card__image">
          <img
            src={`/static/img/${props.item.img.src}`}
            alt={props.item.img.alt}
            style={{ width: '100%', objectFit: 'cover' }}
          />
          <div className="card__icon">
            <img
              src={`${fullIconAlias}${props.isActive ? '-white' : '-black'}.svg`}
              alt={`${props.item.name} иконка`}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="card__button">
            <ScrollLink className=" btn-secondary" to="elements" smooth={true} offset={-60} onClick={props.onChange}>
              Подробнее
            </ScrollLink>
          </div>
          <div className="card__overlay" />
        </div>
        <h3 className="card__title">{props.item.name}</h3>
      </div>
      <style jsx>{`
        .card {
          transition: 0.5s linear;
        }
        .card__image {
          margin: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .card__image:hover .card__overlay {
          display: block;
        }
        .card__image:hover .card__button {
          display: block;
        }
        .card__icon {
          position: absolute;
          bottom: -1.5em;
          right: 1em;
          width: 24px;
          height: 24px;
          padding: 8px;
          background-color: var(--light-color);
          border-radius: 50%;
          z-index: 999;
        }
        .card__button {
          display: none;
          position: absolute;
          top: 50%;
          z-index: 999;
        }
        .card__overlay {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--dark-color);
          opacity: 0.45;
        }
        .card__title {
          position: relative;
          display: inline-block;
          font-family: 'Open sans';
          font-size: 18px;
          font-weight: 700;
          color: var(--light-color);
          padding: 0;
          left: 20px;
        }
        .card--active .card__title {
          margin-left: 30px;
          padding-left: 5px;
          padding-top: 10px;
          color: var(--main-color);
        }
        .card--active .card__title:before {
          content: '';
          position: absolute;
          height: 1px;
          width: 40px;
          top: calc(50% + 5px);
          left: -45px;
          background-color: var(--main-color);
        }
        .card--active .card__image {
          transform: scale(1.1);
          border: 4px solid var(--main-color);
        }
        .card--active .card__icon {
          background-color: var(--main-color);
        }
        .card:not(.card--active) .card__title:after {
          content: '';
          position: absolute;
          height: 1px;
          width: 40px;
          top: 50%;
          right: -60px;
          background-color: var(--light-color);
        }
        @media (max-width: 650px) {
          .card__image {
            height: 150px;
          }
        }
      `}</style>
    </>
  );
}
