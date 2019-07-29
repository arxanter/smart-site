import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Modali, { useModali } from 'modali/dist/index';
import settingsModalCall from '../static/config/modal.config';
import api from '../components/other/api';

import Menu from '../components/mainMenu';
import MainFooter from '../components/MainFooter';
import SideBar from '../components/solutions/SideBar';
import OfferPreview from '../components/solutions/OfferPreview';
import DescSystems from '../components/other/DescSystems';
import ModalCall from '../components/other/ModalCall';

export default function SolutionsPage({ offers, typeOffers }) {
  const [modalCall, toggleModalCall] = useModali(settingsModalCall);
  const router = useRouter();
  const { name } = router.query;
  const [activeOffer, setActiveOffer] = useState();
  useEffect(() => {
    if (name) {
      setActiveOffer(offers.find(el => el.name === name));
    } else {
      setActiveOffer(offers.filter(el => el.type === typeOffers[0].type)[0]);
    }
  }, []);
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
      <DescSystems systems={activeOffer ? activeOffer.systemsList : []}></DescSystems>
      <section className="block-action">
        <div className="block-action__wrapper">
          <div className="block-action__offer">
            <h3>Объект {activeOffer ? activeOffer.name : ''}</h3>
            <span>
              стоимость решения <span className="block-cost">{activeOffer ? activeOffer.price : ''} руб</span>
            </span>
          </div>
          <button className="btn-secondary" onClick={toggleModalCall}>
            Заказать расчет
          </button>
        </div>
      </section>
      <MainFooter></MainFooter>
      <Modali.Modal {...modalCall}>
        <ModalCall toggle={toggleModalCall}> </ModalCall>
      </Modali.Modal>
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
          .block-action__wrapper button:hover {
            color: var(--dark-color);
            border-color: var(--dark-color);
            opacity: 0.8;
          }
          .block-action__wrapper button:active {
            color: var(--dark-color);
            border-color: var(--dark-color);
            opacity: 0.4;
          }

          .block-cost {
            font-size: 28px;
          }
        `}
      </style>
    </>
  );
}

SolutionsPage.getInitialProps = async () => {
  const { offers, typeOffers } = await api.getOffers();
  return { offers, typeOffers };
};
