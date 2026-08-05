import { useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
    const navigate = useNavigate();

    return (
      // <div className="">
        <div
          className="popular_card col-sm-12 bg-white"
          onClick={() => {
            navigate(`/hotel/${hotel._id}`);
          }}
        >
          {/* <div className="shadow"> */}
          <img src={hotel.images[0]} alt={hotel.name} className="card-img-top" />

          <div className="popular_content">
            <div className="popular_card_header">
              <h4>{hotel.name}</h4>
              <p>{hotel.location}</p>
            </div>
            <h6>₹{hotel.price}</h6>
          </div>
        </div>
    
    );
}
export default HotelCard;