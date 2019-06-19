export default function MainForm() {
  return (
    <>
      <footer>
        <div className="footer__logo">
          <h1 style={{ lineHeight: '2em', textAlign: 'center' }}>LOGO</h1>
        </div>
        <div className="footer__info">
          <span>Разработано в 2019. Все права защищены.©</span>
        </div>
        <div className="footer_social">
          <a href="#"><img src="/static/icons/instagram.svg" alt="" style={{width: '100%', height: '100%'}}/></a>
          <a href="#"><img src="/static/icons/facebook.svg" alt="" style={{width: '100%', height: '100%'}}/></a>
        </div>
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: space-between;
          width: calc(100%-20px);
          height: 100px;
          padding: 0 10px;
          background-color: var(--dark-color);
        }
        .footer__logo {
          width: 200px;
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
        .footer_social {
          display: flex;
          align-items: center;
        }
        .footer_social a {
          height: 24px;
          width: 24px;
          margin: 5px;
        }
      `}</style>
    </>
  );
}
