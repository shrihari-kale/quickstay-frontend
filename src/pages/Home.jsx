
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import { SearchProvider } from "../Context/SearchContext";
import ServiceProvide from "../components/ServiceProvide";
// import { SearchProvider } from "../Context/SearchContext";
// import PopularDestination from "../components/PopularDestination";


function Home(){
  return (
    <div>
      {/* <SearchProvider> */}
      <Navbar />
      <Hero />
      {/* </SearchProvider> */}
      {/* <PopularDestination/> */}
      <ServiceProvide />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Home;