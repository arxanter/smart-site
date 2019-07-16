import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
// Components
import Menu from '../components/mainMenu';
import MainBaner from '../components/main/MainBaner';
import MainFooter from '../components/MainFooter';
import BlockElements from '../components/main/BlockElements';
import BlockPoints from '../components/main/BlockPoints';
import BlockSolutions from '../components/main/BlockSolutions';
import BlockMarketing from '../components/main/BlockMarketing';
import BlockPortfolio from '../components/main/BlockPortfolio';
import BlockContactForm from '../components/main/BlockContactForm';

export default function Index(props) {
  const [indexSystem, changeIndexSystem] = useState(0);
  return (
    <>
      <Menu activeName={'Главная'} />
      <main>
        <MainBaner indexSystem={indexSystem} changeIndexSystem={changeIndexSystem} systemsList={props.systemsList} />
        <BlockElements
          indexSystem={indexSystem}
          changeIndexSystem={changeIndexSystem}
          systemsList={props.systemsList}
          systemsData={props.systemsData}
        />
        <BlockPoints />
        <BlockSolutions offers={props.offers} typeOffers={props.typeOffers} />
        <BlockMarketing />
        <BlockPortfolio />
        <BlockContactForm />
      </main>
      <MainFooter />
    </>
  );
}

Index.getInitialProps = async () => {
  let baseURL = process ? process.env.HOST || '' : '';
  baseURL += '/api/v1/';

  try {
    const promises = [];
    promises.push(fetch(baseURL + 'systemsList'));
    promises.push(fetch(baseURL + 'offers'));

    const [systemsRes, offersRes] = await Promise.all(promises);
    const systemsList = await systemsRes.json();
    const { offers, types: typeOffers } = await offersRes.json();
    const systemsData = systemsList.map(item => {
      return {
        name: item.name,
        img: item.img,
        imgGalery: item.imgGalery,
      };
    });
    const promiseArticles = systemsList.map(item => {
      return new Promise(resolve => {
        fetch(baseURL + `systemArticle/${item.article}`)
          .then(res => res.text())
          .then(data => {
            const findedElement = systemsData.find(el => el.name === item.name);
            if (findedElement) findedElement.article = data;
            resolve();
          });
      });
    });
    await Promise.all(promiseArticles);
    return { systemsList, systemsData, offers, typeOffers };
  } catch (err) {
    console.log(err);
  }
};
