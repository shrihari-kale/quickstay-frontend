

function ServiceProvide() {
    return (
      <div className="container servive-provide">
        <div className="row">
          <div className="col">
            <img
              className="service-img"
              src="https://i.travelapi.com/lodging/5000000/4150000/4145100/4145002/b966c972_z.jpg"
            />
          </div>

          <div className="col service-detail">
            <h3 className="fw-semibold ">
              We always provide the best for<br></br>
              our hotel visitors. We are<br></br>
              happy to help you
            </h3>

            <ul className="mt-4">
              <li className="p-1 fs-5">
                <i class="bi bi-check-circle-fill p-2"></i>Best Rate Guaranteed
              </li>
              <li className="p-1 fs-5">
                <i class="bi bi-check-circle-fill p-2"></i>Payment at Hotel
              </li>
              <li className="p-1 fs-5">
                <i class="bi bi-check-circle-fill p-2"></i>Exclusive Members
                Reward
              </li>
              <li className="p-1 fs-5">
                <i class="bi bi-check-circle-fill p-2"></i>WiFi Access
              </li>
              <li className="p-1 fs-5">
                <i class="bi bi-check-circle-fill p-2"></i>No Hidden Charges
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default ServiceProvide;