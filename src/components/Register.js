import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      userId: userId,
      password: password,
      userType: userType,
      loginStatus: 0,
    };
    console.log(obj);
    axios
      .post("http://localhost:8432/havana/voter/addCredentials", obj)
      .then((rej) => alert("User is added"));
  };
  return (
    <div>
      <div className="g">
        <div className="h">
          <h1>USER REGISTRATION</h1>
          <form onSubmit={handleSubmit}>
            Enter your user id :{" "}
            <input
              type="text"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
            <br />
            Enter your password :{" "}
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            Enter the user type - A/E/V:{" "}
            <input
              type="text"
              value={userType}
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            />
            <br />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
