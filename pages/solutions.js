import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Menu from '../components/mainMenu';
import MainFooter from '../components/MainFooter';
import SideBar from '../components/solutions/SideBar';
import OfferPreview from '../components/solutions/OfferPreview';
import OfferSystems from '../components/solutions/OfferSystems';
export default function Solutions({ offers, typeOffers }) {
  const [activeOffer, setActiveOffer] = useState(offers.filter(offer => offer.type === typeOffers[0].type)[0]);
  return (
    <>
      <Menu activeName={'Шаблоны решений'}></Menu>
      <section className="main-block">
        <SideBar
          offers={offers}
          typeOffers={typeOffers}
          activeOffer={activeOffer}
          onChangeOffer={setActiveOffer}
        ></SideBar>
        <OfferPreview offer={activeOffer}></OfferPreview>
      </section>
      <OfferSystems systems={activeOffer ? activeOffer.systemsList : []}></OfferSystems>
      <section className="block-action">
        <div className="block-action__wrapper">
          <div className="block-action__offer">
            <h3>Объект {activeOffer ? activeOffer.name : ''}</h3>
            <span>
              стоимость решения <span className="block-cost">{activeOffer ? activeOffer.price : ''} руб</span>
            </span>
          </div>
          <button className="btn-secondary">Заказать расчет</button>
        </div>
      </section>
      <MainFooter></MainFooter>
      <style jsx>
        {`
          .main-block {
            display: flex;
          }
          .main-block > * {
            flex-grow: 1;
            flex-shrink: 0;
          }
          .block-action {
            background-image: url('/static/img/bg-marketing-red.png');
            padding: 40px 20px;
          }
          .block-action__wrapper {
            display: flex;
            max-width: 600px;
            justify-content: space-between;
            align-items: center;
            margin: auto;
          }
          .block-action__offer {
            display: flex;
            flex-direction: column;
            margin-right: 20px;
          }
          .block-action__offer h3 {
            display: inline-block;
            padding: 0;
            color: var(--light-color);
            font-weight: 500;
          }
          .block-action__offer span {
            color: var(--dark-color);
            font-family: 'Museo Cyrlic', Helvetica, sans-serif;
            line-height: 28px;
            margin-top: 10px;
          }
          .block-cost {
            font-size: 28px;
          }
        `}
      </style>
    </>
  );
}

Solutions.getInitialProps = async () => {
  let baseURL = process ? process.env.HOST || '' : '';
  baseURL += '/api/v1/';
  const res = await fetch(baseURL + 'offers');
  const { offers, types: typeOffers } = await res.json();
  return { offers, typeOffers };
};
