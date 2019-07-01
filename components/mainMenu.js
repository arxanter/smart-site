import Link from 'next/link';

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

export default function Menu() {
  const changeMenu = ev => {
    console.log(ev);
  };
  return (
    <>
      <div className="nav__wrapper">
        <nav className="nav__content">
          <div className="nav__logo">
            <h1>LOGO</h1>
          </div>
          <ul className="nav__list">
            {menuItmes.map((el, index) => {
              return (
                <Link href={el.link} key={index}>
                  <li className={el.name === 'Главная' ? 'active' : ''} onClick={changeMenu}>
                    {el.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="nav__contact">
            <a className="nav__contact__phone" href="tel:+74956450872">
              <div className="phone__icon">
                <img src="static/icons/phone-white.svg" />
              </div>

              <span>+ 7 (495) 645 08 72</span>
            </a>
            <button className="nav__contact__btn btn-primary">Заказать звонок</button>
          </div>
        </nav>
      </div>

      <style jsx>
        {`
          .nav__wrapper {
            height: 70px;
            background-color: var(--dark-color);
            padding: 0 10px;
            text-align: center;
          }
          nav {
            display: flex;
            justify-content: space-between;
            max-width: 1600px;
            height: 100%;
            margin: auto;
          }
          .nav__content {
            display: flex;
            justify-content: space-between;
          }
          .nav__content ul {
            display: flex;
            list-style: none;
            align-items: center;
            height: 100%;
          }
          .nav__content li {
            cursor: pointer;
            padding: 2px;
          }
          .nav__content li:hover {
            color: var(--main-color);
            text-shadow: #262320 0 0 2px;
            transition: color 0.5s linear;
          }

          .nav__content li.active {
            background: linear-gradient(180deg, transparent 50%, var(--main-color) 0);
          }
          .nav__content li + li {
            margin-left: 15px;
          }
          .nav__logo {
            width: 200px;
            height: 100%;
            background-color: var(--main-color);
          }
          .nav__contact {
            display: flex;
            align-items: center;
          }
          .nav__contact__phone {
            display: flex;
            align-items: center;
            margin-right: 15px;
            line-height: 2.4em;
          }
          .nav__contact__phone:hover {
            opacity: 0.8;
          }
          .nav__contact__phone .phone__icon {
            width: 18px;
            height: 18px;
            padding: 3px;
            margin: 5px;
            position: relative;
            border-radius: 50%;
            background-color: var(--main-color);
          }
          .phone__icon img {
            position: relative;
            top: -5px;
          }
        `}
      </style>
    </>
  );
}
