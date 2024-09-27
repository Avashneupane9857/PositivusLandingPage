import Banner from "./components/Banner";
import CaseStudies from "./components/CaseStudies";
import { Company } from "./components/Company";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <Services />
      <Banner />
      <CaseStudies />
      <Works />
    </>
  );
}
export default App;
