import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChooseUs() {

      useEffect(() => {
        AOS.init({duration:2000,})
      },[]);

  const features = [
    {
      icon: "bi-building",
      title: "Luxury Hotels",
      desc: "Stay at the best hotels across India.",
    },
    {
      icon: "bi-cash-coin",
      title: "Best Price",
      desc: "Get the best deals and lowest prices.",
    },
    {
      icon: "bi-headset",
      title: "24/7 Support",
      desc: "Our team is always ready to help.",
    },
    {
      icon: "bi-shield-check",
      title: "Secure Booking",
      desc: "100% safe and secure payment.",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Why Choose QuickStay?</h2>

      <div className="row">
        {features.map((item, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-6 mb-4"
            data-aos="fade-right">
            <div className="card shadow text-center h-100 p-4 choose-box">
              <i
                className={`${item.icon} text-primary`}
                style={{ fontSize: "50px" }}
              ></i>

              <h4 className="mt-3">{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
