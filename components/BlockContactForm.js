import Icon from './other/Icon';
export default function BlockContactForm() {
  return (
    <>
      <section>
        <h2>
          <mark className="mark-underline">Контакты</mark>
        </h2>
        <div className="contact__info">
          <ul>
            <li>
              <img src="/static/icons/phone-white.svg" alt=""/>
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        section {
          background-image: url('/static/img/bg2.jpg');
          background-position: top center;
          color: var(--light-color);
          height: 900px;
        }
        section h2 {
          color: var(--light-color);
        }
      `}</style>
    </>
  );
}
