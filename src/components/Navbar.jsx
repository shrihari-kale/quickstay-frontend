import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/q-letter.png";
import { useSearch } from "../Context/SearchContext";


function Navbar() {
  
  const { search, setSearch }= useSearch();

  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logout Successful");

    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isHome ? (scrolled ? "bg-dark shadow" : "") : "bg-dark shadow"
      }`}
    >
      <div className="container">
        {/* Logo */}

        <Link
          to="/"
          className="navbar-brand d-flex align-items-center fw-bold text-white"
        >
          <img src={logo} alt="logo" width="40" className="me-1" />
          uickStay
        </Link>

        {/* Search bar */}

        {/* <div className="d-flex flex-column flex-md-row mt-2" style={{marginLeft:"15%"}}>
          <input
            type="text"
            placeholder="Search Hotels..."
            className="form-control"
            style={{ width: "300px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> 
        </div> */}

        {/* Hamburger */}

        <button
          className="navbar-toggler border-0 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <div
            className="d-flex flex-column flex-md-row mt-2"
            style={{ marginLeft: "15%" }}
          >
            <input
              type="text"
              placeholder="Search Hotels..."
              className="form-control"
              style={{ width: "300px" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/mybooking">
                My Booking
              </Link>
            </li>

            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown ms-lg-3 mt-3 mt-lg-0">
                <button
                  className="btn btn-outline-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle me-2"></i>

                  {user?.name}
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="bi bi-person me-2"></i>
                      Profile
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item text-danger"
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;