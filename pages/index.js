import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
// Components
import Menu from '../components/mainMenu';
import MainBaner from '../components/mainBaner';
import MainFooter from '../components/MainFooter';
import BlockElements from '../components/BlockElements';
import BlockPoints from '../components/BlockPoints';
import BlockSolutions from '../components/BlockSolutions';
import BlockMarketing from '../components/BlockMarketing';
import BlockPortfolio from '../components/BlockPortfolio';
import BlockContactForm from '../components/BlockContactForm';

export default function Index(props) {
  const [indexSystem, changeIndexSystem] = useState(0);
  return (
    <>
      <Menu />
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
  let baseURL = process ? process.env.HOST : '';
  baseURL += '/api/v1/';
  try {
    const promises = [];
    promises.push(fetch(baseURL + 'systemsList'));
    promises.push(fetch(baseURL + 'offers'));

    const [systemsRes, offersRes] = await Promise.all(promises);
    const systemsList = await systemsRes.json();
    const { offers, types: typeOffers } = await offersRes.json();
    const systemsData = [];
    const promiseArticles = systemsList.map(item => {
      return new Promise(resolve => {
        fetch(baseURL + `systemArticle/${item.article}`)
          .then(res => res.text())
          .then(data => {
            systemsData.push({
              article: data,
              img: item.img,
              imgGalery: item.imgGalery,
            });
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
