
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import { SearchProvider } from "../Context/SearchContext";


function Home(){

  return (
    <div>
      <SearchProvider>
        <Navbar />
        <Hero />
      </SearchProvider>

      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Home;