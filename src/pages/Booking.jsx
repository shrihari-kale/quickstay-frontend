import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

function Booking() {

     const navigate = useNavigate();
     const location = useLocation();
     const hotel = location.state.hotel;
    
     const [paymentMethod, setPaymentMethod] = useState("UPI");
     const [fullName, setFullName] = useState("");
     const [email, setEmail] = useState("");
     const [mobile, setMobile] = useState("");
     const [checkIn, setCheckIn] = useState("");
     const [checkOut, setCheckOut] = useState("");
     const [guests, setGuests] = useState(1);

     const handleBooking = async () => {
       const token = localStorage.getItem("token");

      //  // Step 1
      //  const order = await axios.post(
      //    "http://localhost:3000/api/payments/create-order",
      //    {
      //      amount: hotel.price,
      //    },
      //  );

       // Step 2
      //  const options = {
      //    key: "rzp_test_xxxxx",

      //    amount: order.data.amount,

      //    currency: "INR",

      //    name: "QuikStay",

      //    description: "Hotel Booking",

      //    order_id: order.data.id,

         
           // Step 3
         const response = await axios.post(
           "https://quickstay-backend-1.onrender.com/api/bookings",
           {
             hotelName: hotel.name,

             fullName,
             email,
             mobile,
             checkIn,
             checkOut,
             guests,

             roomType: "Deluxe",

             amount: hotel.price,

             paymentMethod,
           },
           {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           },
         );

           toast.success("Booking Successful!");

           navigate("/success");
         };
      //  };

      //  const razor = new window.Razorpay(options);

      //  razor.open();
    //  };
  return (
    <div className="container mt-5">
      <div className=" row ">
        <h3 className="mb-3">Booking Details</h3>

        <div className="col-md-7">
          <div className="card p-4 shadow">
            <FaUser />
            <lable>Full Name</lable>
            <input
              className="form-control mb-3"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <FaEnvelope />
            <lable>Email</lable>
            <input
              className="form-control mb-3"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FaPhone />
            <lable>Mobile No</lable>
            <input
              className="form-control mb-3"
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            
            <lable>Check-In</lable>
            <input
              className="form-control mb-3"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          
    
            <lable>Ckeck-Out</lable>
            <input
              className="form-control mb-3"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
        

            <lable>Guest</lable>
            <input
              className="form-control mb-3"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-5 mt-4">
          <div className="card p-4 shadow-lg">
            <h4>{hotel.name}</h4>
            <p>{hotel.location}</p>
            <p>{hotel.roomTypes}</p>
            <h5>₹ {hotel.price}</h5>

            <h4 className="mt-3">Select Payment Method</h4>
            <select
              className="p-1 w-50"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option>UPI</option>
              <option>Card</option>
              <option>Net Banking</option>
            </select>
            <br />
            <br />
            <button className="btn btn-success w-50" onClick={handleBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
export default Booking;
