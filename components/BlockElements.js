import ArticalElement from './_BlockElements/ArticalElement';

export default function BlockElements() {
  const systems = [
    {
      name: 'Освещение',
      iconAlias: 'light',
      img: 'light.jpg',
      key: 1,
    },
    {
      name: 'Климат',
      iconAlias: 'climate',
      img: 'climate.jpg',
      key: 2,
    },
    {
      name: 'Безопасность',
      iconAlias: 'security',
      img: 'security.jpg',
      key: 3,
    },
    {
      name: 'Мультимедиа',
      iconAlias: 'multimedia',
      img: 'multimedia.jpg',
      key: 4,
    },
    {
      name: 'Мониторинг',
      iconAlias: 'monitoring',
      img: 'monitoring.jpg',
      key: 5,
    },
  ];
  const itemContent = {
    head: 'Климат',
    textSource: 'climate.md',
    mainImage: 'climateMain.jpg',
    images: ['climate.jpg', 'climateMain.jpg'],
  };
  const activeIndex = 2;
  return (
    <>
      <div id="elements">
        <h2>
          <mark className="mark-underline">Элементы</mark>умного дома
        </h2>
        <section className="elements__container">
          <aside>
            {systems.map((el, index) => {
              return (
                <button
                  className={`elements__item ${el.key === activeIndex ? 'elements__item--active' : ''}`}
                  key={el.key}
                >
                  <div className="elements__item__icon">
                    <img
                      src={`static/icons/_elements/${el.iconAlias}-${
                        el.key === activeIndex ? 'white' : 'black'
                      }.svg`}
                      alt={`${el.name}-icon`}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <span>{el.name}</span>
                </button>
              );
            })}
          </aside>
          <ArticalElement content={itemContent} />
        </section>
      </div>
      <style jsx>{`
        #elements {
          background-color: var(--light-color);
        }
        .elements__container {
          display: flex;
          padding: 60px;
          margin: auto;
          max-width: 1200px;
          height: 600px;
          color: var(--dark-color);
        }
        .elements__container aside {
          width: 350px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .elements__container artical {
          width: 100%;
          height: 500px;
          border: 1px solid black;
        }
        .elements__item {
          display: flex;
          align-items: center;
          margin: 10px;
          padding: 10px;
          border-radius: 40px;
        }
        .elements__item__icon {
          width: 32px;
          height: 32px;
          padding: 10px;
          overflow: visiable;
          border-radius: 50%;
          box-shadow: 0 2px 10px 0 var(--dark-color);
          margin-right: 20px;
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
        .elements__item--active .elements__item__icon {
          box-shadow: none;
        }
      `}</style>
    </>
  );
}
