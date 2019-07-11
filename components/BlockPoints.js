export default function BlockPoints() {
  const points = [
    {
      name: 'Составление ТЗ',
      text: 'Составление технического задания исходя из пожеланий клиента',
      icon: 'list.svg',
    },
    {
      name: 'Проектирование',
      text: 'Разработка проектной документации и подбор оборудования',
      icon: 'monitor.svg',
    },
    {
      name: 'Монтажные работы',
      text: 'Монтаж оборудования и прокладка кабельных трасс',
      icon: 'tools.svg',
    },
    {
      name: 'Пусконаладочные работы',
      text: 'Программирование и отладка систем автоматизации',
      icon: 'gears.svg',
    },
  ];
  return (
    <>
      <section>
        <h2>
          <mark className="mark-underline">Схема</mark>выполнения
        </h2>
        <ul className="container-points">
          {points.map((el, index) => {
            return (
              <li className="point" key={index}>
                <div className="point__icon">
                  <img src={`/static/icons/_points/${el.icon}`} style={{ width: '100%', height: '100%' }} />
                </div>
                <h3 className="point__name">{el.name}</h3>
                <span className="point__text">{el.text}</span>
              </li>
            );
          })}
        </ul>
      </section>
      <style jsx>{`
        section {
          background-color: var(--gray-color);
          color: var(--dark-color);
        }
        .container-points {
          width: 100%;
          display: flex;
          text-align: center;
          padding: 40px 0;
        }

        .point {
          margin: 0 5px;
          flex: 1 1;
        }

        .point__icon {
          width: 90px;
          height: 90px;
          margin: auto;
        }
        .point__text {
          display: inline-block;
          max-width: 300px;
        }
        .point__name {
          height: 2.2em;
        }
        @media (max-width: 1000px) {
          .point__name {
            font-size: 18px;
          }
          .point__text {
            font-size: 14px;
          }
          .container-points {
            padding: 10px 0;
          }
        }
        @media (max-width: 650px) {
          .container-points {
            flex-direction: column;
          }
          .point__name {
            height: auto;
            padding: 5px 0;
          }
          .point__text {
            margin-bottom: 20px;
          }
          .container-points {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
