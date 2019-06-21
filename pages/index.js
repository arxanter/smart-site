import Menu from '../components/mainMenu';
import MainBaner from '../components/mainBaner';
import MainFooter from '../components/MainFooter';
import BlockElements from '../components/BlockElements';
import BlockPoints from '../components/BlockPoints';
import BlockSolutions from '../components/BlockSolutions';
import BlockMarketing from '../components/BlockMarketing';
import BlockPortfolio from '../components/BlockPortfolio';
import BlockContactForm from '../components/BlockContactForm';

const Index = () => (
  <React.Fragment>
    <Menu />
    <main>
      <MainBaner />
      <BlockElements />
      <BlockPoints />
      <BlockSolutions />
      <BlockMarketing />
      <BlockPortfolio />
      <BlockContactForm />
    </main>
    <MainFooter />
  </React.Fragment>
);

export default Index;
