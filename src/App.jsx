import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Booking from "./pages/Booking";
import MyBooking from "./pages/MyBookings";
import "./App.css";
import HotelDetails from "./pages/HotelDetails";
//import Payment from "./pages/Payment";
import BookingSuccess from "./pages/BookingSuccess";
import Profile from "./pages/Profile";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/success" element={<BookingSuccess />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
