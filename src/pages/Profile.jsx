import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPassword(user.password);
    }
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        "https://quickstay-backend-1.onrender.com/api/users/profile",

        {
          name,
          email,
          password,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
    navigete("/");
  };

  return (
    <>
      <Navbar />

      <div className="container login_page">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-5 rounded-4">
              <h2 className="text-center mb-4">Edit Profile</h2>

              <input
                placeholder="UserName"
                className="form-control mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Email"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="New Password"
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-primary w-100" onClick={handleUpdate}>
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;