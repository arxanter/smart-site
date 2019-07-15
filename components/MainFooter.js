import Link from 'next/link';

export default function MainForm() {
  const menuItmes = [
    {
      name: 'Главная',
      link: '/',
    },
    {
      name: 'Шаблоны решений',
      link: '/solutions',
    },
    {
      name: 'Портфолио',
      link: '/portfolio',
    },
    {
      name: 'Контакты',
      link: '/contact',
    },
  ];
  return (
    <>
      <footer>
        <div className="footer__logo">
          <h1 style={{ lineHeight: '2em', textAlign: 'center' }}>LOGO</h1>
        </div>
        <div className="footer__info">
          <div className="footer__links">
            {menuItmes.map((el, index) => {
              return (
                <Link href={el.link} key={index}>
                  <a>{el.name}</a>
                </Link>
              );
            })}
          </div>
          <span>Разработано в 2019. Все права защищены.©</span>
        </div>
        <div className="footer_social">
          <a href="#" name="Наша страница Instagram">
            <img src="/static/icons/instagram.svg" alt="Иконка instagram" style={{ width: '100%', height: '100%' }} />
          </a>
          <a href="#" name="Наша страница Instagram">
            <img src="/static/icons/facebook.svg" alt="Иконка facebook" style={{ width: '100%', height: '100%' }} />
          </a>
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
        .footer__links {
          padding-bottom: 20px;
        }
        .footer__links a {
          padding: 10px;
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
