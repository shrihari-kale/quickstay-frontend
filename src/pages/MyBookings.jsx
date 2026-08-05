import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function MyBooking() {

    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
       console.log(bookings)
        const fetchBookings = async () => {

            const token = localStorage.getItem("token");
            // console.log(token);
            const response = await axios.get(
              "https://quickstay-backend-1.onrender.com/api/bookings/mybookings",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );
            console.log(response.data);
            setBookings(response.data);

            
        };
        fetchBookings();
        
    },[]);

    // delete booking api
       const handleDelete = async (id) => {
         const token = localStorage.getItem("token");

         await axios.delete(
           `https://quickstay-backend-1.onrender.com/api/bookings/${id}`,
           {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           },
         );
         setBookings(bookings.filter((booking) => booking._id !== id));
       };

    return (
      <>
        <Navbar />
        <div className="container mypage">
          {/* <h1>{JSON.stringify(bookings)}</h1> */}
          <div className="row mybooking">
            <h3 className="mt-5">MyBooking</h3>

            {bookings.map((booking) => {
              return (
                <div className="col-6" key={booking._id}>
                  <div className="bg-white shadow-lg p-4 rounded-4 mb-5 mybooking_page">
                    <h3 className="mb-4">Hotel Name: {booking.hotelName}</h3>
                    <hr></hr>
                    <h4>Full Name: {booking.fullName}</h4>
                    <p> RoomType: {booking.roomType}</p>
                    <p> Check-In: {booking.checkIn}</p>
                    <p> Check-Out: {booking.checkOut}</p>
                    <p> Amount: ₹{booking.amount}</p>
                    <p> Paymethod: {booking.paymentMethod}</p>
                    <p className="text-success">Status: Confirmed</p>
                    <hr />

                    <button
                      className="btn btn-danger "
                      onClick={() => handleDelete(booking._id)}>
                      Cancel Booking
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <Footer/> */}
      </>
    );   
  }
export default MyBooking;
