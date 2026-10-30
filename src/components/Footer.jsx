import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
   useEffect(()=> {
    AOS.init({duration:2000,})
   })

  return (
    <footer className="hotel_footer bg-dark">
      <div className="hotel_footer__top container">
        <div className="hotel_footer__brand">
          <h3>QuickStay</h3>
          <p>
            Handpicked hotels and homestays across India — booked in minutes,
            remembered for years.
          </p>
          <div className="hotel_footer__social p-1">
            <i className="bi bi-instagram"></i>
            {/* <a href="#" aria-label="Facebook">
              
            </a> */}
            <i className="bi bi-facebook"></i>
            {/* <a href="#" aria-label="Twitter">
              X
            </a> */}
            <i className="bi bi-twitter-x"></i>
          </div>
        </div>

        <div className="hotel_footer__col">
          <h5>Explore</h5>
          <ul>
            <li>
              <Link to="/hotels">All Hotels</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="hotel_footer__col">
          <h5>Support</h5>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/cancellation">Cancellation Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms &amp; Privacy</Link>
            </li>
          </ul>
        </div>

        <div className="hotel_footer__col hotel_footer__contact">
          <h5>Get in touch</h5>
          <p>+91 93562 68841</p>
          <p>help@Quickstay.com</p>
          <p>Pune, Maharashtra, India</p>
        </div>
      </div>

      <div className="hotel_footer__bottom container">
        <p>Develope by: Shrihari Kale</p>
        <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>

        <div className="hotel_footer__legal">
          {/* <p>Payment Method</p> */}
          
          <img
            className="method-img"
            src="https://www.sastasafar.com/img/footer_svg/phonepe.svg"
            alt="phonepay"
          />

          <img
            className="method-img"
            src="https://www.sastasafar.com/img/footer_svg/paytm-icon.svg"
            alt=""
          />
          <img
            className="method-img"
            src="https://www.sastasafar.com/img/footer_svg/bhim-app-icon.svg"
            alt=""
          />
          <img
            className="method-img"
            src="https://www.sastasafar.com/img/footer_svg/google-pay-acceptance-mark-icon.svg"
            alt=""
          />
          <img
            className="method-img"
            src="https://www.sastasafar.com/img/footer_svg/rupay-logo-icon.svg"
            alt=""
          />
          <img
            className="method-img py-2"
            src="https://www.sastasafar.com/img/footer_svg/master-card-icon.svg"
            alt=""
          />
          <img
            className="method-img"
            src="https://www.sastasafar.com/img/footer_svg/visa-icon.svg"
            alt=""
          />
          <img
            className="method-img"
            src="https://www.sastasafar.com/img/footer_svg/american-express.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
