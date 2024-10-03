import Service from "./composants/service";
import About from "./composants/about";
import Header from "./composants/header";
import Head from "./composants/head";
import Footer from "./composants/footer";
import Solutions from './composants/Solutions.jsx'
import Learning from './composants/Learning.jsx'
import Substainable from './composants/Substainable.jsx'
import Recyclage from './composants/Recyclage.jsx'
const App = () => {
  return (
      <div>
        <Header/>
        <Head/>
       <About/>
       <Service/>
       <Solutions/>
      <Learning/>
      <Substainable/>
      <Recyclage/>
       <Footer/>
      </div>
    );
}

export default App;