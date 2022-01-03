import React, { useContext } from "react";
import { signInWithGoogle, signInWithFacebook } from "../utils/firebaseConfig";
import { AuthContext } from "../providers/users/UserProvider";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="SignUp" style={{ textAlign: "center" }}>
      <h1>Connexion</h1>
      <button className="authWithGoogle" onClick={signInWithGoogle}>
        <img
          className="google-icon"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
        <span className="btn-text">Sign in</span>
      </button>

      <button className="authWithFacebook" onClick={signInWithFacebook}>
        <img
          className="facebook-icon"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Facebook.pn.png/640px-Facebook.pn.png"
        />
        <span className="btn-text">Sign in</span>
      </button>
    </div>
  );
};

export default SignUp;
