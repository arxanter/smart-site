export default function BlockPoints() {
  const points = [
    {
      name: 'Составление ТЗ',
      text: 'Составление технического задание исходя из пожеланий клиента',
      icon: 'list.svg',
    },
    {
      name: 'Проектирование',
      text: 'Разработка проектной документации и подбор оборудования',
      icon: 'monitor.svg',
    },
    {
      name: 'Монтажные работы',
      text: 'Прокладка кабельных трасс и подготовительные работы.',
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
          flex-direaction: column;
          text-align: center;
          padding: 40px 0;
        }

        .point {
          margin: 0 10px;
          flex: 1 1;
        }

        .point__icon {
          width: 90px;
          height: 90px;
          margin: auto;
        }
      `}</style>
    </>
  );
}
