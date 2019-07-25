import { useState } from 'react';
import React from 'react';
import api from '../other/api';
import { toast } from 'react-toastify';
export default function BlockContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  let timerFormErr = null;
  const formError = React.createRef();

  async function sendForm() {
    const data = {
      name,
      phone,
      email,
      message,
    };
    const scheme = {
      name: 'string',
      phone: 'phone',
      email: 'email',
      message: 'string',
    };
    const isError = api.validForm(data, scheme);
    if (timerFormErr) {
      clearTimeout(timerFormErr);
      timerFormErr = null;
    }
    if (isError && formError.current) {
      formError.current.style.visibility = 'visible';
      timerFormErr = setTimeout(() => {
        if (formError.current) formError.current.style.visibility = 'hidden';
      }, 2000);
    } else {
      const res = await api.sendForm(data, 'call');

      if (!res.err) {
        toast.success('Форма успешно отправлена');
      } else {
        toast.error('Не удалось отправить форму');
      }
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  }
  return (
    <>
      <section id="contact-form">
        <div className="wrapper">
          <h2>
            <mark className="mark-underline">Контакты</mark>
          </h2>
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
          <div className="contact__desc">
            <h4 style={{ color: 'var(--light-color)' }}>Остались вопросы?</h4>
            <span>Пожалуйста, заполните необходимые данные, и мы свяжемся с вами в ближайшее время</span>
          </div>
          <form className="contact-form" name="contact-form">
            <div className="container">
              <label className="form-item">
                <span>Ваше имя</span>
                <input
                  type="text"
                  value={name}
                  onChange={ev => {
                    setName(ev.target.value);
                  }}
                />
              </label>
              <label className="form-item">
                <span>Телефон</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={ev => {
                    setPhone(ev.target.value);
                  }}
                />
              </label>
              <label className="form-item">
                <span>Электронный адрес</span>
                <input
                  type="email"
                  value={email}
                  onChange={ev => {
                    setEmail(ev.target.value);
                  }}
                />
              </label>
            </div>
            <label className="form-item">
              <span>Сообщение</span>
              <textarea
                type="text"
                value={message}
                onChange={ev => {
                  setMessage(ev.target.value);
                }}
              />
            </label>
          </form>
          <span className="contact-form__error" ref={formError}>
            Не верно заданы поля формы
          </span>
          <div className="contact-form__action">
            <span className="contact-form__privacy">
              Нажимая кнопку «Заказать проект» вы принимаете условия
              <a href="/privacy_policy.pdf" target="_blank">
                {' '}
                политики о конфиденциальности
              </a>
            </span>
            <button className="btn-secondary" onClick={sendForm}>
              Заказать проект
            </button>
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
        .contact-form > * {
          width: 50%;
          max-width: 350px;
        }
        .contact-form .container {
          padding-right: 20px;
        }
        .contact-form__error {
          visibility: hidden;
          color: var(--main-color);
        }
        .contact-form__privacy,
        .contact-form__privacy a {
          display: block;
          padding-bottom: 10px;
          font-size: 12px;
          max-width: 400px;
          margin: 0 auto;
        }
        .contact-form__action {
          padding: 20px;
        }
        .contact-form__action button {
          padding: 0 30px;
        }
        @media (max-width: 1000px) {
          .contact__info__item span {
            font-size: 14px;
          }
          .contact__info__icon {
            width: 18px;
            height: 18px;
          }
          .contact-form .container {
            padding-right: 10px;
          }
        }
        @media (max-width: 650px) {
          .contact__info ul {
            flex-direction: column;
          }
          .contact__info li {
            margin-top: 5px;
          }
          .contact__info__icon {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </>
  );
}
