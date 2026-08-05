
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import WhyChooseUs from "../components/WhyChooseUs";



function Home(){

  return(
    <div>
      <Navbar/>
      <Hero/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default Home;