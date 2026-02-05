import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <p>
          Email id:{" "}
          <input
            type="email"
            placeholder="Enter your email address"
            style={{ padding: "0.1rem" }}
          />
        </p>
        <p>
          Password:{" "}
          <input
            type="password"
            placeholder="Enter your email address"
            style={{ padding: "0.1rem" }}
          />
        </p>
        <input type="submit" value="Submit" style={{ padding: "0.2rem" }} />
      </form>
      <Link to="/">
        <button
          style={{ padding: "0.2rem", margin: "0.5rem", cursor: "pointer" }}
        >
          Back
        </button>
      </Link>
    </div>
  );
}
