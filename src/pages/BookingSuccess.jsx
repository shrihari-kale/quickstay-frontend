import { useNavigate } from "react-router-dom";

function BookingSuccess() {

    const navigate = useNavigate();

    return (
      <div className="container successfulContainer">
        <div className="bookingSuccess text-center shadow">
          <h2 className="mb-4">🎉Booking Successful!🎉</h2>
          <p>Thank you for booking with QuikSaty.</p>
          <p>Your booking has been confirmed.</p>

          <div className="d-flex justify-content-center gap-5 mt-5">
            <button
              className="btn btn-primary mb-3"
              onClick={() => navigate("/mybooking")}
            >
              My Booking
            </button>
            <button
              className="btn btn-success mb-3"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    );
}
export default BookingSuccess;