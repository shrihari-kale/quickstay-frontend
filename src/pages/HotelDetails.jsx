import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";

// import RecommendedHotel from "../components/RecommendedHotels";
// import RecommendedHotels from "../components/RecommendedHotels";

function HotelDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [allHotels, setAllHotels] = useState([]);

  useEffect(() => {
    const getAllHotels = async () => {
      try{
        const res = await axios.get(
          "https://quickstay-backend-1.onrender.com/api/hotels",
        );
        setAllHotels(res.data);
      }catch (error) {
        console.log(error);
      }
    };
    getAllHotels();
    },[]);
  
    const recommendedHotels = allHotels.filter(
       (item)=> item._id !== hotel?._id ) 
       .slice(0.4);
      //  item.location === hotel?.location
    // );



  useEffect(() => {
    const getHotel = async () => {
      try {
        const response = await axios.get(
          `https://quickstay-backend-1.onrender.com/api/hotels/${id}`,
        );
      
        // console.log(hotel);
        console.log(response.data);
          setHotel(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHotel();
  }, [id]);

  if (!hotel) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container my-5">
        {/* Header */}
        <div className="top-detail d-flex justify-content-between align-items-center flex-wrap mb-3">
          <div>
            <h2 className="mb-1">{hotel.name}</h2>
            <p className="text-muted mb-1">
              <i className="bi bi-geo-alt-fill me-1"></i>
              {hotel.location}
            </p>
            <p>
              ⭐⭐⭐⭐☆ <strong>8.4 Very Good</strong> (1,636 Reviews)
            </p>
          </div>
          <div className="text-end">
            <h2 className="price">₹ {hotel.price}</h2>
            <small className="text-muted"> Including all taxes + fees</small>
            <div className="mt-3">
              <button class="btn btn-success btn-view">View Deal</button>
            </div>
          </div>
        </div>

        {/* Main Image + Thumbnails */}
        <div className="card border-0 shadow-sm mb-4 overflow-hidden">
          <img
            src={hotel.images[activeImage]}
            alt={hotel.name}
            className="w-100"
            style={{ maxHeight: "480px", objectFit: "cover" }}
          />
          <div className="d-flex gap-2 p-2 bg-light overflow-auto">
            {hotel.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${hotel.name} ${index + 1}`}
                onClick={() => setActiveImage(index)}
                className={`rounded border ${
                  activeImage === index
                    ? "border-primary border-3"
                    : "border-secondary-subtle"
                }`}
                style={{
                  width: "90px",
                  height: "70px",
                  objectFit: "cover",
                  cursor: "pointer",
                  opacity: activeImage === index ? 1 : 0.7,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>

        <div className="row g-4">
          {/* Left: Details */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3">Description</h4>
                <p className="text-secondary mb-0">{hotel.description}</p>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3">Amenities</h4>
                <div className="d-flex flex-wrap gap-2">
                  {hotel.amenities.map((item, index) => (
                    <span
                      key={index}
                      className="badge rounded-pill text-bg-light border px-3 py-2"
                    >
                      <i className="bi bi-check-circle-fill text-success me-1"></i>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3">Room Types</h4>
                <div className="row g-3">
                  {hotel.roomTypes.map((room) => (
                    <div
                      key={room.type}
                      className={`card p-3 mb-3${
                        selectedRoom?.type === room.type
                          ? "border-primary shadow"
                          : ""
                      }`}
                    >
                      <div className="p-3 border rounded d-flex align-items-center">
                        <i className="bi bi-door-open fs-4 text-primary me-2"></i>
                           <h5>{room.type}</h5>
                           <p>{room.price}/night</p>
                           <p>{room.beds}</p>
                           <p>{room.guests} Guests</p>
                      </div>
                      <button 
                      className="{`btn ${
                      selectedRoom?.type === room.type
                      ?"btn-success"
                      :"btn-outline-primary"

                      }`}
                      onClick={()=>setSelectedRoom(room)>book now</button>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            <h4 className="card-title mb-3">Room Types</h4>

            <div className="row">
              {hotel.roomTypes.map((room) => (
                <div className="col-md-6 mb-3" key={room.type}>
                  <div
                    className={`card h-100 p-3 ${
                      selectedRoom?.type === room.type
                        ? "border-primary shadow"
                        : ""
                    }`}
                  >
                    <h5>{room.type}</h5>

                    <h2 className="text-success fw-bold">₹ {room.price}</h2>

                    <p className="mb-1">🛏 {room.beds}</p>

                    <p className="mb-3">👥 {room.guests} Guests</p>

                    <button
                      className={`btn ${
                        selectedRoom?.type === room.type
                          ? "btn-success"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => setSelectedRoom(room)}
                    >
                      {selectedRoom?.type === room.type
                        ? "Selected"
                        : "Select  Room"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-3">Policies</h4>
                {/* <ul className="list-unstyled mb-0"> */}
                {hotel.policies.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky Booking Card */}
          <div className="col-lg-4">
            <div
              className="card border-0 shadow-sm"
              style={{ position: "sticky", top: "20px" }}
            >
              <div className="card-body text-center">
                <h5 className="text-muted mb-1">Price per night</h5>
                <h2 className="text-success fw-bold mb-4">
                  ₹ {selectedRoom ? selectedRoom.price : hotel.price}
                </h2>
                <button
                  className="btn btn-primary btn-lg w-100"
                  disabled={!selectedRoom}
                  onClick={() =>
                    navigate("/booking", {
                      state: {
                        hotel,
                        room: selectedRoom,
                      },
                    })
                  }
                >
                  {selectedRoom ? "Book Now" : "Select a Room"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <h3 className="mt-5 mb-4"></h3>
        <div className="row">
          {recommendedHotels.slice(0, 4).map((item) => (
            <div className="col-md-3 mb-4" key={item._id}>
              <HotelCard hotel={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HotelDetails;