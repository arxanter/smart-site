import Icon from './other/Icon';
export default function BlockContactForm() {
  return (
    <>
      <section>
        <div className="wrapper">
          <h2>
            <mark className="mark-underline">Контакты</mark>
          </h2>
          <div className="contact__info">
            <ul>
              <li className="contact__info__item">
                <div className="contact__info__icon">
                  <img src="/static/icons/phone-white.svg" alt="" />
                </div>
                <span>+7(495) 645 08 72</span>
              </li>
              <li className="contact__info__item">
                <div className="contact__info__icon">
                  <img src="/static/icons/email-white.svg" alt="" />
                </div>
                <span>info@stativa.ru</span>
              </li>
              <li className="contact__info__item">
                <div className="contact__info__icon">
                  <img src="/static/icons/address-white.svg" alt="" />
                </div>
                <span>Москва, Б. Марфинская, 4/6</span>
              </li>
            </ul>
          </div>
          <div className="contact__desc">
            <h4>Остались вопросы?</h4>
            <span>Пожалуйста, заполните необходимые данные, и мы свяжемся с вами в ближайшее время</span>
          </div>
          <form className="contact-form" name="contact-form">
            <div className="container">
              <label>
                <span>Ваше имя:</span>
                <input type="text" />
              </label>
              <label>
                <span>Телефон:</span>
                <input type="phone" />
              </label>
              <label>
                <span>Электронный адрес:</span>
                <input type="text" />
              </label>
            </div>
            <label>
              <span>Сообщение:</span>
              <textarea type="text" />
            </label>
          </form>
          <div className="contact-form__action">
            <button className="secondary-btn">Заказать проект</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          background-image: url('/static/img/bg2.jpg');
          background-position: top center;
          color: var(--light-color);
          text-align: center;
        }
        .wrapper {
          height: 100%;
          background-color: var(--dark-vis-color);
        }
        section h2 {
          color: var(--light-color);
        }
        .contact__info {
          background-color: var(--dark-semi-vis-color);
          padding: 10px 0;
        }
        .contact__info ul {
          display: flex;
          max-width: 1000px;
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
          padding: 5px;
          margin: 0 10px;
          border-radius: 50%;
          background-color: var(--main-color);
        }
        .contact__desc {
          width: 100%;
          max-width: 400px;
          padding: 40px 0;
          margin: auto;
        }
        .contact__desc span {
          font-size: 14px;
        }
        .contact-form {
          display: flex;
          justify-content: center;
          margin: auto;
          padding: 0 10px;
        }
        .contact-form .container {
          padding-right: 20px;
        }
        .contact-form input,
        .contact-form textarea {
          border-radius: 5px;
          border-style: none;
          outline: none;
          line-height: 1.5em;
          font-size: 18px;
          padding: 5px 10px;
        }
        .contact-form input {
          height: 25px;
        }
        .contact-form textarea {
          width: 100%;
          height: 100%;
          resize: none;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          margin: 10px 5px;
          text-align: left;
        }
        .contact-form label span {
          font-size: 14px;
          margin-bottom: 2px;
        }
        .contact-form > * {
          width: 50%;
          max-width: 350px;
        }
        .contact-form__action {
          padding: 20px;
        }
        .contact-form__action button {
          padding: 0 30px;
        }
      `}</style>
    </>
  );
}
