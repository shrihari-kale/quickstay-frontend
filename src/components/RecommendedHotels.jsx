import HotelCard from "../components/HotelCard";

function RecommendedHotels({ recommended }) {
  return (
    <div className="recommended_grid">
      {recommended.map((hotel) => (
        <HotelCard key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
}

export default RecommendedHotels;
