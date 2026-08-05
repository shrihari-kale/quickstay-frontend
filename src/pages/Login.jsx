import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        },
      );
      localStorage.setItem("token", response.data.token);

      localStorage.setItem("user", 
        JSON.stringify(response.data.user)
    );
      // console.log(response.data)
       toast.success("Login Successful");

      navigate("/");
    }

    return (
      <>
        <Navbar />
        <div className="container login_page">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-5 shadow-lg rounded-4">
                <h3 className="mb-5">Login Page</h3>

                <input
                  className="form-control mb-5"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="form-control mb-5"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary mb-3" onClick={handleLogin}>
                  Login
                </button>
                <p className="">
                  Don't have an account ?{" "}
                  <Link to="/signup" className="text-primary fw-bold">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Login;