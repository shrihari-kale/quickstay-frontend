import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://quickstay-backend-1.onrender.com/api/users/signup",
        {
          name,
          email,
          password,
        },
      );

      localStorage.setItem("token", response.data.token);

      alert("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container login_page">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-5 shadow-lg rounded-4">
              <h3 className="text-center mb-4">Create Account</h3>

              <form onSubmit={handleSignup}>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="form-control mb-4"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="btn btn-primary w-100">
                  Signup
                </button>
              </form>

              <p className="mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary text-decoration-none fw-bold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
