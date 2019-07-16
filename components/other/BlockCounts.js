import React from 'react';

export default function BlockCounts({ left, right }) {
  return (
    <>
      <div className="block-numbers">
        <div className="block-numbers__item">
          <span className="main">{left[0]}</span>
          <span>{left[1]}</span>
        </div>
        <div className="block-numbers__item">
          <span className="main">{right[0]} руб</span>
          <span>{right[1]}</span>
        </div>
      </div>
      <style jsx>{`
        .block-numbers {
          display: flex;
          margin-top: 20px;
          height: 80px;
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
          font-size: 22px;
          font-weight: 300;
        }
        .block-numbers__item span.main {
          font-size: 32px;
          font-weight: 300;
        }
      `}</style>
    </>
  );
}
