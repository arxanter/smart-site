import { useState, useEffect } from 'react';
import api from '../components/other/api';
import Router, { useRouter } from 'next/router';

import Menu from '../components/mainMenu';
import MainFooter from '../components/MainFooter';
import ProtfolioMainBlock from '../components/portfolio/ProtfolioMainBlock';
import DescSystems from '../components/other/DescSystems';
import BlockPoints from '../components/portfolio/BlockPoints';
let startActive = null;

export default function PortfolioPage({ portfolio }) {
  const router = useRouter();
  const { name } = router.query;
  if (name) {
    startActive = portfolio.find(el => el.name === name);
  } else {
    startActive = portfolio[0];
  }
  const [activeObject, setActiveObject] = useState(startActive);
  useEffect(() => {
    if (activeObject) {
      const href = `/portfolio?name=${activeObject.name}`;
      Router.replace(href, href, { shallow: true });
    }
  }, [activeObject]);
  return (
    <>
      <Menu activeName={'Объекты'}></Menu>
      <ProtfolioMainBlock
        activeObject={activeObject}
        onChange={setActiveObject}
        portfolio={portfolio}
      ></ProtfolioMainBlock>
      <BlockPoints activeObject={activeObject}></BlockPoints>
      <DescSystems systems={activeObject ? activeObject.systems : []}></DescSystems>
      <MainFooter></MainFooter>
      <style jsx>{``}</style>
    </>
  );
}

PortfolioPage.getInitialProps = async () => {
  const portfolio = await api.getPortfolio();
  return { portfolio };
};
