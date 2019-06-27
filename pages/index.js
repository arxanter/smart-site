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
        <BlockSolutions />
        <BlockMarketing />
        <BlockPortfolio />
        <BlockContactForm />
      </main>
      <MainFooter />
    </>
  );
}

Index.getInitialProps = async () => {
  const baseURL = process ? process.env.HOST : '';
  try {
    const res = await fetch(baseURL + '/api/v1/systemsList');
    const systemsList = await res.json();
    const systemsData = [];
    for (let item of systemsList) {
      const res = await fetch(baseURL + `/api/v1/systemArticle/${item.article}`);
      const systemData = await res.text();
      systemsData.push({
        article: systemData,
        img: item.img,
        imgGalery: item.imgGalery,
      });
    }
    return { systemsList, systemsData };
  } catch (err) {
    console.log(err);
  }
};
