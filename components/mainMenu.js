import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import '../css/burgerMenu.css';
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

export default function MenuComponent({ activeName }) {
  return (
    <>
      <div className="nav-wrapper">
        <nav className="nav">
          <div className="nav__logo">
            <h3>LOGO</h3>
          </div>
          <ul className="nav__list">
            {menuItmes.map((el, index) => {
              return (
                <Link href={el.link} key={index}>
                  <li className={el.name === activeName ? 'active' : ''}>{el.name}</li>
                </Link>
              );
            })}
          </ul>
          <div className="nav__contact">
            <a className="phone-number" href="tel:+74956450872">
              <div className="phone-icon">
                <img src="static/icons/phone-white.svg" alt="Иконка телефоная трубка" />
              </div>
              <span>+ 7 (495) 645 08 72</span>
            </a>
            <a className="btn-primary" href="#contact-form">
              Заказать звонок
            </a>
          </div>
          <div className="burger-menu">
            <Menu bodyClassName={'nav'} width={'200px'} right>
              <ul>
                {menuItmes.map((el, index) => {
                  return (
                    <Link href={el.link} key={index}>
                      <li className={el.name === 'Главная' ? 'active' : ''}>{el.name}</li>
                    </Link>
                  );
                })}
              </ul>
              <a className="phone-number" href="tel:+74956450872">
                <span>+ 7 (495) 645 08 72</span>
              </a>
            </Menu>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          @keyframes slidein {
            from {
              width: 0;
            }

            to {
              width: 100%;
            }
          }
          .nav-wrapper {
            height: 60px;
            background-color: var(--dark-color);
            padding: 0 10px;
            text-align: center;
          }
          .nav {
            display: flex;
            justify-content: space-between;
            max-width: 1600px;
            height: 100%;
            margin: auto;
          }
          .nav__list {
            display: flex;
            list-style: none;
            align-items: center;
            height: 100%;
          }
          nav li {
            cursor: pointer;
            padding: 2px;
            position: relative;
          }
          nav li:hover:before {
            content: '';
            position: absolute;
            border-bottom: 2px solid var(--main-color);
            bottom: 0;
            left: 0;
            animation-duration: 1.5s;
            animation-name: slidein;
          }
          nav li.active {
            background: linear-gradient(180deg, transparent 50%, var(--main-color) 0);
          }
          .nav__list li + li {
            margin-left: 15px;
          }
          .nav__logo {
            width: 120px;
            height: 100%;
            background-color: var(--main-color);
          }
          .nav__contact {
            display: flex;
            align-items: center;
          }
          .nav__contact .phone-number {
            display: flex;
            color: var(--light-color);
            align-items: center;
            margin-right: 15px;
            line-height: 2.4em;
          }
          .nav__contact .phone-number:hover {
            opacity: 0.8;
          }
          .nav__contact .phone-icon {
            width: 18px;
            height: 18px;
            padding: 3px;
            margin: 5px;
            position: relative;
            border-radius: 50%;
            background-color: var(--main-color);
          }
          .phone-icon img {
            position: relative;
            top: -6px;
          }
          .burger-menu {
            display: none;
          }
          @media (max-width: 1000px) {
            .nav__contact a {
              display: none;
            }
            .nav li,
            .nav__contact span {
              font-size: 12px;
            }
          }
          @media (max-width: 650px) {
            .nav__list,
            .nav__contact {
              display: none !important;
            }
            .burger-menu {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
}
