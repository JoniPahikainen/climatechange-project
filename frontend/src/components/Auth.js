import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthGet } from "./charts/GetChart";

const Auth = ({ children }) => {
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const checkStorage = (key) => {
    const storedData = localStorage.getItem(key);
    if (!storedData) setTokenIsValid(false);
    else setTokenIsValid(true);
  };
  useEffect(() => {
    checkStorage("token");
  }, []);

  if (!tokenIsValid) {
    return (
      <div>
        <h2>You need to login to view this page</h2>
        <p>
          <Link to="/Login">login</Link>
        </p>
      </div>
    );
  } else if (tokenIsValid) {
    return children;
  }
};

export default Auth;
