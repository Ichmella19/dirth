import Service from "./composants/service";
import About from "./composants/about";
import Header from "./composants/header";
import Head from "./composants/head";
import Footer from "./composants/footer";
const App = () => {
  return (
      <div>
        <Header/>
        <Head/>
       <About/>
       <Service/>
       <Footer/>
      </div>
    );
}

export default App;