import Banner from "./components/Banner";
import CaseStudies from "./components/CaseStudies";
import { Company } from "./components/Company";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
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
      <Team />
      <Testimonials />
    </>
  );
}
export default App;
