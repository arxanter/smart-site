import React from 'react';
import ProtfolioMainBlock from '../components/portfolio/ProtfolioMainBlock';

export default function Portfolio() {
  return (
    <>
      <ProtfolioMainBlock></ProtfolioMainBlock>
      <div className="block-info"></div>
      <section>
        <span>Hello</span>
      </section>
      <style jsx>{`
        * {
          color: red;
        }
      `}</style>
    </>
  );
}
