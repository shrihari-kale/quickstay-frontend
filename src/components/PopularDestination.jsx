function PopularDestination() {
    return (
      <div className="container mt-5">
        <h2>Book Hotels at Popular Destinations</h2>
        <div className="destination-grid mt-4">
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1667849521371-e78b4d603076?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
            <h3>Mumbai</h3>
          </div>

          <div className="destination-card">
            <img src="https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
            <h3>Goa</h3>
          </div>

          <div className="destination-card wide">
            <img src="https://images.unsplash.com/photo-1667849521402-efb9b61ddf73?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
            <h3>Delhi</h3>
          </div>

          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1715678710159-ee67d5bdba85?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
            <h3>Pune</h3>
          </div>

          <div className="destination-card wide">
            <img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
            <h3>Jaipur</h3>
          </div>

          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1750834115164-8c2658f18dd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
            <h3>Hygrabad</h3>
          </div>
        </div>
      </div>
    );
}

export default PopularDestination;