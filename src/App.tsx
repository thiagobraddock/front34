import { useEffect } from 'react';
import WOW from 'wow.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'tiny-slider/dist/tiny-slider.css';
import './assets/css/animate.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/main.css';
import Header from './components/Header';
import Welcome from './components/Sections/Welcome';
import News from './components/Sections/News';
import Numbers from './components/Sections/Numbers';
import Pricing from './components/Sections/Pricing';
import CallToAction from './components/Sections/CallToAction';
import Footer from './components/Sections/Footer';
import Team from './components/Sections/Team';
import Projects from './components/Sections/Projects';

function App() {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <Header />
      <Welcome />
      <Team />
      <News />
      <Numbers />
      <Projects />
      <Pricing />
      <CallToAction />
      <Footer />

      <a
        href="#"
        className="scroll-top"
      >
        <i className="lni lni-chevron-up" />
      </a>
    </>
  );
}

export default App;
