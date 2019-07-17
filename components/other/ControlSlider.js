import React from 'react';

export default function ControlSlider({
  onLeft,
  onRight,
  color = 'black',
  size = 32,
  disableLeft,
  disableRight,
  children,
}) {
  return (
    <>
      <button
        onClick={() => {
          onLeft('-');
        }}
        disabled={disableLeft}
        aria-label="Навигация влево"
      >
        <img src={`/static/icons/_arrows/arrow-left-${color}.svg`} alt="Иконка стрелка влево" />
      </button>
      {children}
      <button
        onClick={() => {
          onRight('+');
        }}
        disabled={disableRight}
        aria-label="Навигация вправо"
      >
        <img src={`/static/icons/_arrows/arrow-right-${color}.svg`} alt="Иконка стрелка вправо" />
      </button>
      <style jsx>{`
        button {
          width: ${size}px;
        }
        button + button {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
