import About from "./components/About";
import Available from "./components/Available";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Feature />
      <Available />
      <About />
      <Cta />
      <Faq />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
