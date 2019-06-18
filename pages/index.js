import Menu from '../components/mainMenu';
import MainBaner from '../components/mainBaner';
import BlockElements from '../components/BlockElements';

const Index = () => (
  <React.Fragment>
    <Menu />
    <main>
      <MainBaner/>
      <BlockElements/>
      <div id="solutions" style={{width: '100%', height: '300px', backgroundColor: 'orange' }}/>
      <div id="solutions" style={{width: '100%', height: '300px', backgroundColor: 'orange' }}/>
      <div id="contact" style={{width: '100%', height: '300px', backgroundColor: 'green' }}/>
    </main>

  </React.Fragment>
);

export default Index;
