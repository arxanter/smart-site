export default function MainForm() {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo">
          <h5>LOGO</h5>
        </div>
        <div className="footer__info">
          <span>Разработано в 2019. Все права защищены.©</span>
        </div>
        <div className="footer__social">
          <a href="#" name="Наша страница Instagram">
            <img src="/static/icons/instagram.svg" alt="Иконка instagram" style={{ width: '100%', height: '100%' }} />
          </a>
          <a href="#" name="Наша страница Instagram">
            <img src="/static/icons/facebook.svg" alt="Иконка facebook" style={{ width: '100%', height: '100%' }} />
          </a>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-between;
          width: calc(100%-20px);
          height: 50px;
          padding: 0 10px;
          background-color: var(--dark-color);
        }
        .footer__logo {
          width: 100px;
          height: 100%;
          background-color: var(--main-color);
        }
        .footer__info {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          font-size: 10px;
        }
        .footer__links {
          padding-bottom: 20px;
        }
        .footer__links a {
          padding: 10px;
        }
        .footer__social {
          display: flex;
          align-items: center;
        }
        .footer__social a {
          height: 24px;
          width: 24px;
          margin: 5px;
        }
      `}</style>
    </>
  );
}
