import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Menu from '../components/mainMenu';
import MainFooter from '../components/MainFooter';
import ProtfolioMainBlock from '../components/portfolio/ProtfolioMainBlock';
import DescSystems from '../components/other/DescSystems';
import BlockPoints from '../components/portfolio/BlockPoints';

export default function PortfolioPage({ portfolio }) {
  const [activeObject, setActiveObject] = useState(portfolio[0]);
  return (
    <>
      <Menu activeName={'Портфолио'}></Menu>
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
  let baseURL = process ? process.env.HOST || '' : '';
  baseURL += '/api/v1/';
  const res = await fetch(baseURL + 'portfolio');
  const portfolio = await res.json();
  return { portfolio };
};
