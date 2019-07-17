import React from 'react';

export default function BlockCounts({ left, right, style = {}, size = 'normal' }) {
  return (
    <>
      <div className={`block-numbers ${size}`} style={style}>
        <div className="block-numbers__item">
          <span className="main">{left[0]}</span>
          <span>{left[1]}</span>
        </div>
        <div className="block-numbers__item">
          <span className="main">{right[0]}</span>
          <span>{right[1]}</span>
        </div>
      </div>
      <style jsx>{`
        .block-numbers {
          display: flex;
          margin-top: 20px;
          color: var(--dark-color);
          background-color: var(--gray-vis-color);
          justify-content: space-around;
        }
        .block-numbers__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          top: -25px;
        }
        .block-numbers__item span {
          font-weight: 300;
        }
        /** normal */
        .block-numbers.normal {
          height: 80px;
        }
        .block-numbers.normal .block-numbers__item {
          top: -25px;
        }
        .block-numbers.normal .block-numbers__item span {
          font-size: 22px;
        }
        .block-numbers.normal .block-numbers__item span.main {
          font-size: 32px;
        }
        /** small */
        .block-numbers.small {
          height: 50px;
        }
        .block-numbers.small .block-numbers__item {
          top: -22px;
        }
        .block-numbers.small .block-numbers__item span {
          font-size: 18px;
        }
        .block-numbers.small .block-numbers__item span.main {
          font-size: 26px;
        }
      `}</style>
    </>
  );
}
