export default function ModalWrapper({ children, title, info, toggle, sendForm }) {
  return (
    <>
      <div className="modal">
        <header className="modal__header">
          <h3>{title}</h3>
          <button
            className="modal__close-btn"
            onClick={() => {
              toggle();
            }}
          >
            <img src="/static/icons/close.svg" alt="close-icon" className="modal__close-icon" />
          </button>
        </header>
        <span className="modal__info">{info}</span>
        <section className="modal__content">{children}</section>
        <footer className="modal__footer">
          <span className="modal__privacy">
            Нажимая кнопку «Отправить» вы принимаете условия
            <a href="/privacy_policy.pdf" target="_blank">
              {' '}
              политики о конфиденциальности
            </a>
          </span>
          <button className="btn-primary" onClick={sendForm}>
            Отправить
          </button>
        </footer>
      </div>
      <style jsx>{`
        .modal {
          color: var(--dark-color);
          margin: 0 20px;
        }
        .modal__header {
          position: relative;
        }
        .modal__header h3 {
          text-align: center;
          padding-bottom: 10px;
          padding-top: 30px;
        }
        .modal__close-btn {
          position: absolute;
          right: -10px;
          top: 10px;
          height: 24px;
          width: 24px;
        }
        .modal__info {
          display: block;
          max-width: 320px;
          text-align: center;
          font-size: 14px;
          margin: 0 auto;
          padding-bottom: 30px;
        }
        .modal__footer {
          margin: 20px 0;
          text-align: center;
        }
        .modal__privacy,
        .modal__privacy a {
          display: block;
          padding-bottom: 5px;
          font-size: 12px;
          max-width: 400px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
