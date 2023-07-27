import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Shopping from './components/Shopping/Shopping';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <Shopping />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
