//import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import axios from "axios"
// import heroImg from "../assets/quickstayheroimg.jpg";
import hero from "../assets/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearch } from "../Context/SearchContext";
import PopularDestination from "../components/PopularDestination";

function Hero() {
      const [hotels, setHotels] = useState([]);
      // const [search, setSearch] = useState("");
  const {search} = useSearch();

    const filteredHotels = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase())||
     hotel.location.toLowerCase().includes(search.toLocaleLowerCase())
    );

      useEffect(() => {

          const getHotels = async () => {
              try {
                  // const response = await axios.get( "http://localhost:3000/api/hotels");
                  const response = await axios.get(
                    "https://quickstay-backend-1.onrender.com/api/hotels",
                  );

                  setHotels(response.data);
              }catch (error){
                  console.log(error.message);
              }
          };
          getHotels();
      },[]);

      // effect

      useEffect(() => {
        AOS.init({duration:2000,})
      },[]);
  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "100vh",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center text-white"
          style={{
            minHeight: "100vh",
            minWidth: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <h1
            className="text-white display-4 display-md-3 display-text"
            data-aos="fade-down"
          >
            Find Your Perfect Stay
          </h1>
          <p
            className="text-white fs-4 text-center px-3 display-text"
            data-aos="fade-down"
            // data-aos-delay="200"
          >
            Discover luxury hotels across India
          </p>
        </div>
      </div>

      <PopularDestination />
      <div className="container mt-5">
        <h2 className="fw-bold">Popular Hotels</h2>
      </div>
      <div className="popular_grid container mt-4">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

// export default Hero;
export default Hero;