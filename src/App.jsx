import Banner from "./components/Banner";
import { Company } from "./components/Company";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <Services />
      <Banner />
    </>
  );
}
export default App;
