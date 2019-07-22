import Menu from '../components/mainMenu';
import MainFooter from '../components/MainFooter';
import dynamic from 'next/dynamic';
const YaMaps = dynamic(import('../components/other/YaMaps'), {
  ssr: false,
});
export default function contact() {
  return (
    <>
      <div className="container">
        <Menu activeName={'Контакты'}></Menu>
        <main>
          <h2>Контатная информация</h2>
          <div className="contact__info">
            <ul>
              <li className="contact__info__item">
                <div className="contact__info__icon">
                  <img src="/static/icons/phone-white.svg" alt="Иконка телефон" />
                </div>
                <span>+7(495) 645 08 72</span>
              </li>
              <li className="contact__info__item">
                <div className="contact__info__icon">
                  <img src="/static/icons/email-white.svg" alt="Иконка электронная почта" />
                </div>
                <span>info@stativa.ru</span>
              </li>
              <li className="contact__info__item">
                <div className="contact__info__icon">
                  <img src="/static/icons/address-white.svg" alt="Иконка почтовый адрес" />
                </div>
                <span>Москва, Б. Марфинская, 4/6</span>
              </li>
            </ul>
          </div>
          <h2>
            Мы на <mark className="mark-underline">карте</mark>
          </h2>
          <script
            type="text/javascript"
            charSet="utf-8"
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A77P0sJeZxZnjD5eeoQoTMUs_Uw8o2m37&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"
            async
            defer
          ></script>
        </main>
        <MainFooter></MainFooter>
      </div>
      <style jsx>{`
        main {
          min-height: calc(100vh - 160px);
        }

        .contact__info {
          background-color: var(--dark-semi-vis-color);
          padding: 20px 0;
        }
        .contact__info ul {
          display: flex;
          max-width: 800px;
          padding: 0 10px;
          margin: auto;
          justify-content: space-between;
        }
        .contact__info__item {
          display: flex;
          align-items: center;
        }
        .contact__info__item span {
          font-family: Helvetica;
        }
        .contact__info__icon {
          width: 24px;
          height: 24px;
          padding: 7px;
          margin: 0 10px;
          border-radius: 50%;
          background-color: var(--main-color);
        }
      `}</style>
    </>
  );
}
