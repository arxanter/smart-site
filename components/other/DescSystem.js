import React from 'react';

export default function DescSystem({ system, reverse }) {
  return (
    <>
      <article>
        <div className="header">
          <div className="elements__item__icon">
            <img src={`static/icons/_elements/${system.icon}`} alt={`${system.name}-icon`} />
          </div>
          <h2>{system.name}</h2>
        </div>
        <div className={`desc ${reverse ? 'desc--reverse' : ''}`}>
          <ul className="desc__points">
            {system.points.map((el, index) => {
              return (
                <li key={index} className="list-item">
                  {el}
                </li>
              );
            })}
          </ul>
          <div className="desc__info">
            <span>{system.text}</span>
            {system.cost ? (
              <div className="desc__cost">
                <span>cтоимость</span>
                <span className="desc__cost-value">{system.cost}</span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </article>
      <style jsx>{`
        article {
          color: var(--dark-color);
          padding: 40px 0;
          padding-right: 0;
          max-width: 1200px;
          margin: auto;
        }
        .header {
          display: flex;
          padding: 40px 20px;
        }
        .header h2 {
          padding: 0;
          line-height: 48px;
        }
        .elements__item__icon {
          width: 28px;
          height: 28px;
          padding: 10px;
          overflow: visiable;
          border-radius: 50%;
          box-shadow: 0 2px 10px 0 var(--dark-color);
          margin-right: 20px;
        }
        .desc {
          display: flex;
          justify-content: space-between;
        }
        .desc__points {
          width: 450px;
          position: relative;
          padding: 20px 40px;
          margin-left: 20px;
        }
        .desc__points::before,
        .desc__points::after {
          content: '';
          position: absolute;
          top: 0;
          height: 100%;
          width: 100px;
          max-width: 30%;
          border: 2px solid var(--main-color);
        }
        .desc__points::before {
          left: 0;
          border-right: 0;
        }
        .desc__points::after {
          right: 0;
          border-left: 0;
        }
        .desc__points li {
          position: relative;
          margin: 20px 0;
          margin-left: 20px;
          font-weight: 600;
        }
        .desc__info {
          max-width: 600px;
        }
        .desc__info > span {
          display: block;
          text-align: justify;
          margin-right: 20px;
          margin-bottom: 20px;
        }
        .desc__cost {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff;
          padding: 10px 20px;
          font-family: 'Museo Cyrlic', Helvetica, sans-serif;
        }
        .desc__cost-value {
          font-size: 24px;
        }
        .desc--reverse {
          flex-direction: row-reverse;
        }
        .desc--reverse .desc__points {
          margin-left: 0;
          margin-right: 20px;
        }
        .desc--reverse .desc__info > span {
          margin-right: 0;
          margin-left: 20px;
        }
      `}</style>
    </>
  );
}
