import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Menu from '../components/mainMenu';
import MainFooter from '../components/MainFooter';
import SideBar from '../components/SideBar';
import OfferPreview from '../components/OfferPreview';
import OfferSystems from '../components/OfferSystems';
export default function Solutions({ offers, typeOffers }) {
  const [activeOffer, setActiveOffer] = useState(offers.filter(offer => offer.type === typeOffers[0].type)[0]);
  return (
    <>
      <Menu activeName={'Шаблоны решений'}></Menu>
      <section className="main-block">
        <SideBar offers={offers} typeOffers={typeOffers} activeOffer={activeOffer} onChange={setActiveOffer}></SideBar>
        <OfferPreview offer={activeOffer}></OfferPreview>
        <OfferSystems offer={activeOffer}></OfferSystems>
      </section>
      <MainFooter></MainFooter>
      <style jsx>
        {`
          .main-block {
            display: flex;
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
