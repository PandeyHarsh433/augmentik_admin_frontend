import React, { useEffect } from "react";

const requireSignIn = (WrappedComponent) => {
  const WithSignInCheck = (props) => {
    const isSignIn = localStorage.getItem("isSignIn");

    useEffect(() => {
      if (!isSignIn) {
        window.location.href = "/login";
      } 
    }, []);

    // Render the protected component if signed in
    return isSignIn ? <WrappedComponent {...props} /> : null;
  };

  return WithSignInCheck;
};

export default requireSignIn;
