// import Navbar from "../components/Navbar";
// import { useEffect, useState } from "react";
// import HotelCard from "../components/HotelCard";
// import axios from "axios"

// function Home() {

//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
        
//         const getHotels = async () => {
//             try {
//                 const response = await axios.get( "http://localhost:3000/api/hotels");

//                 setHotels(response.data);
//             }catch (error){
//                 console.log(error.message);
//             }
//         };
//         getHotels();
//     },[]);

//     return (
//       <div className="container">
//         <Navbar />
//         {/* home header */}

//         <header className="section_container">
//           <div className="header_img_container">
//             <div className="header_content">
//               <h1>Enjoy Your Dream Vacation</h1>
//               <p>Book Hotels, Flights and stay Packages at lowest price.</p>
//             </div>
//           </div>

//           <div className="booking_container">
//             <form>
//               <div className="form_group">
//                 <div className="input_group">
//                   <input type="text" />
//                   <label>Location</label>
//                 </div>
//                 <p>Where are you going?</p>
//               </div>

//               <div className="form_group">
//                 <div className="input_group">
//                   <input type="text" />
//                   <label>Check In</label>
//                 </div>
//                 <p>Add Date</p>
//               </div>

//               <div className="form_group">
//                 <div className="input_group">
//                   <input type="text" />
//                   <label for="">Check out</label>
//                 </div>
//                 <p>Add Date</p>
//               </div>

//               <div className="form_group">
//                 <div className="input_group">
//                   <input type="text" />
//                   <label for="">Guests</label>
//                 </div>
//                 <p>Add Guests</p>
//               </div>
//             </form>
//             <button className="btn1">
//               <i className="fa-solid fa-magnifying-glass"></i>
//             </button>
//           </div>
//         </header>

//         <h2 className="section_header">Popular Hotels</h2>

//         <div className="popular_grid">
//           {hotels.map((hotel) => (
//             <HotelCard key={hotel._id} hotel={hotel} />
//           ))}
//         </div>
//       </div>
//     );
// }
// export default Home;

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