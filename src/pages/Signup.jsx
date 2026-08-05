import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Signup() {

  const navigate = useNavigate("");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async ()=>{
    const response = await axios.post("http://localhost:3000/api/users/signup",
      {
        name,
        email,
        password
      }
    );
    localStorage.setItem("token",response.data.token)

    alert("SignUp Successfull")

    navigate("/login");
  }

  return (
    <>
      <Navbar />
      <div className="container login_page">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-5 shadow-lg rounded-4">
              <h3 className="text-center mb-4">Create Account</h3>
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-control mb-5"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              
               <button className="btn btn-primary " onClick={handleSignup}> Signup </button>
              <p className="mt-4">
                Already have an account ?{" "}
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
