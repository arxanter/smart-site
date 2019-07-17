import ArticleElement from './_BlockElements/ArticleElement';

export default function BlockElements({ systemsList = [], indexSystem, systemsData = [], changeIndexSystem }) {
  return (
    <>
      <div id="elements">
        <h2>
          <mark className="mark-underline">Элементы</mark> умного дома
        </h2>
        <section className="elements__container">
          <aside>
            {systemsList.map((el, index) => {
              const colorIcon = index === indexSystem ? 'white' : 'black';
              return (
                <button
                  className={`elements__item ${index === indexSystem ? 'elements__item--active' : ''}`}
                  onClick={() => {
                    changeIndexSystem(index);
                  }}
                  key={index}
                >
                  <div className="elements__item__icon">
                    <img src={`static/icons/_elements/${el.iconAlias}-${colorIcon}.svg`} alt={`${el.name}-icon`} />
                  </div>
                  <span>{el.name}</span>
                </button>
              );
            })}
          </aside>
          <div className="elements__slider">
            <div>
              {systemsData.map((item, index) => (
                <ArticleElement {...item} key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        #elements {
          background-color: var(--light-color);
        }
        .elements__container {
          display: flex;
          padding: 60px 10px;
          margin: auto;
          max-width: 1200px;
          height: 600px;
          color: var(--dark-color);
        }
        .elements__container aside {
          width: 220px;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          justify-content: space-between;
        }
        .elements__container article {
          width: 100%;
          height: 500px;
          border: 1px solid black;
        }
        .elements__item {
          display: flex;
          align-items: center;
          margin: 10px;
          padding: 7px;
          border-radius: 40px;
          transition: background-color 0.5s linear;
        }
        .elements__item__icon {
          width: 28px;
          height: 28px;
          padding: 10px;
          overflow: visiable;
          border-radius: 50%;
          box-shadow: 0 2px 10px 0 var(--dark-color);
          margin-right: 20px;
          transition: box-shadow 1s linear;
        }
        .elements__item:hover {
          box-shadow: 0 3px 8px 0 var(--main-color);
          opacity: 0.8;
        }
        .elements__item:active {
          opacity: 0.4;
        }
        .elements__item--active {
          background-color: var(--main-color);
          box-shadow: 0 2px 18px 0 var(--main-color);
          color: var(--light-color);
        }
        .elements__item--active span {
          margin-left: -10px;
        }
        .elements__item--active .elements__item__icon {
          box-shadow: none;
        }
        .elements__slider {
          margin: 0 auto;
          overflow: hidden;
        }
        .elements__slider div {
          display: flex;
          height: 100%;
          transform: translateX(calc(-100% * ${indexSystem}));
          transition: 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
