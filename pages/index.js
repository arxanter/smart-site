import { useState } from 'react';
import Modali, { useModali } from 'modali/dist/index';
import settingsModalCall from '../static/config/modal.config';
import api from '../components/other/api';
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
import ModalCall from '../components/other/ModalCall';

export default function Index(props) {
  const [indexSystem, changeIndexSystem] = useState(0);
  const [modalCall, toggleModalCall] = useModali(settingsModalCall);

  return (
    <>
      <Menu activeName={'Главная'} />
      <main>
        <MainBaner
          indexSystem={indexSystem}
          changeIndexSystem={changeIndexSystem}
          systemsList={props.systemsList}
          modalCall={toggleModalCall}
        />
        <BlockElements
          indexSystem={indexSystem}
          changeIndexSystem={changeIndexSystem}
          systemsList={props.systemsList}
          systemsData={props.systemsData}
          modalCall={toggleModalCall}
        />
        <BlockPoints />
        <BlockSolutions offers={props.offers} typeOffers={props.typeOffers} />
        <BlockMarketing />
        <BlockPortfolio />
        <BlockContactForm />
      </main>
      <MainFooter />
      <Modali.Modal {...modalCall}>
        <ModalCall toggle={toggleModalCall}> </ModalCall>
      </Modali.Modal>
    </>
  );
}

Index.getInitialProps = async () => {
  try {
    const systemsList = await api.getSystemsList();
    const { offers, typeOffers } = await api.getOffers();
    const systemsData = systemsList.map(item => {
      return {
        name: item.name,
        img: item.img,
        imgGalery: item.imgGalery,
      };
    });
    const promiseArticles = systemsList.map(item => {
      return new Promise(resolve => {
        api.getArticle(item.article).then(data => {
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
