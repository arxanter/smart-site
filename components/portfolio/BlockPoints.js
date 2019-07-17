export default function BlockPoints({ activeObject }) {
  return (
    <>
      <section className="block-info">
        <article className="block-info__item">
          <h3>
            <mark className="mark-underline">Оборудование</mark>
          </h3>
          <ul>
            {activeObject.equipment.map((el, index) => {
              return (
                <li className="list-item" key={index}>
                  {el}
                </li>
              );
            })}
          </ul>
        </article>
        <div className="separator"></div>
        <article className="block-info__item">
          <h3>
            Ход <mark className="mark-underline">работ</mark>
          </h3>
          <ul>
            {activeObject.timePoints.map((el, index) => {
              return (
                <li className="list-item" key={index}>
                  {el}
                </li>
              );
            })}
          </ul>
        </article>
      </section>
      <style jsx>
        {`
          .block-info {
            display: flex;
            max-width: 800px;
            margin: 20px auto;
            justify-content: space-between;
          }
          .block-info h3 {
            text-align: center;
          }
          .separator {
            margin: 30px 0;
            border-left: 2px solid var(--gray-color);
          }
        `}
      </style>
    </>
  );
}
