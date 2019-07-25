import { useState } from 'react';
import ModalWrapper from './ModalWrapper';

import api from './api';
import { toast } from 'react-toastify';

export default function modalWrapper({ onSend, toggle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    text: '',
  });
  const changeParam = (name, value) => {
    const newData = { ...formData };
    newData[name] = value;
    setFormData(newData);
  };
  const sendForm = async () => {
    if (onSend) {
      onSend(formData);
    } else {
      const scheme = {
        name: 'string',
        phone: 'phone',
        email: 'email',
      };
      const isError = api.validForm(formData, scheme);
      if (isError) {
        toast.error('Проверьте правильность заполнения полей');
      } else {
        const res = await api.sendForm(formData, 'call');
        if (!res.err) toast.success('Форма успешно отправлена');
        else toast.error('Не удалось отправить форму');
        toggle();
      }
    }
  };
  return (
    <>
      <ModalWrapper
        title={'Заказать проект'}
        info={'Пожалуйста, заполните необходимые данные, и мы свяжемся с вами в ближайшее время'}
        toggle={toggle}
        sendForm={sendForm}
      >
        <form className="modal-form">
          <div className="modal-form__first-block">
            <label className="form-item ">
              <span>Ваше имя</span>
              <input
                type="text"
                value={formData.name}
                onChange={ev => {
                  changeParam('name', ev.target.value);
                }}
              />
            </label>
            <label className="form-item ">
              <span>Телефон</span>
              <input
                type="tel"
                value={formData.phone}
                onChange={ev => {
                  changeParam('phone', ev.target.value);
                }}
              />
            </label>
            <label className="form-item ">
              <span>Электронный адрес</span>
              <input
                type="email"
                value={formData.email}
                onChange={ev => {
                  changeParam('email', ev.target.value);
                }}
              />
            </label>
          </div>
          <label className="form-item modal-form__second-block">
            <span>Сообщение</span>
            <textarea
              type="text"
              value={formData.message}
              onChange={ev => {
                changeParam('text', ev.target.value);
              }}
            />
          </label>
        </form>
      </ModalWrapper>

      <style jsx>{`
        .modal-form {
          display: flex;
          justify-content: space-between;
        }
        .modal-form > * {
          width: 50%;
          padding: 0 10px;
        }
        .form-item input,
        .form-item textarea {
          background-color: var(--gray-color);
        }
      `}</style>
    </>
  );
}
