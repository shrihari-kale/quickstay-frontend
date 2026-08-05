// import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import axios from "axios"


function Hero() {
      const [hotels, setHotels] = useState([]);
      const [search, setSearch] = useState("");

    const filteredHotels = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase())||
     hotel.location.toLowerCase().includes(search.toLocaleLowerCase())
    );


      useEffect(() => {

          const getHotels = async () => {
              try {
                  const response = await axios.get( "http://localhost:3000/api/hotels");

                  setHotels(response.data);
              }catch (error){
                  console.log(error.message);
              }
          };
          getHotels();
      },[]);
  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "100vh",
          // backgroundImage:
          //   "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
          backgroundImage:
            "url('https://thedubainomad.com/wp-content/uploads/2025/03/image_fx_-2025-03-25T160308.320-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

            <div
    className="d-flex flex-column justify-content-center align-items-center text-center text-white"
    style={{
      minHeight: "100vh",
      minWidth:"100%",
      backgroundColor: "rgba(0,0,0,0.5)",
    }}
  >
        <h1 className="text-white display-4 display-md-3">
          Find Your Perfect Stay
        </h1>
        <p className="text-white fs-5 text-center px-3">
          Discover luxury hotels across India
        </p>
        <div className="d-flex flex-column flex-md-row gap-3 mt-4">
          <input
            type="text"
            placeholder="Search Hotels..."
            className="form-control"
            style={{ width: "300px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* <button className="btn btn-primary">Search</button> */}
        </div>
        </div>
      </div>

      <h2 className="section_header mt-5">Popular Hotels</h2>

      <div className="popular_grid container mt-5">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

// export default Hero;
export default Hero;