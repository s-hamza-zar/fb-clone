import React from "react";
import Button from "@mui/material/Button";
import "./Login.css";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { auth, provider } from "../firebase";
function Login() {
  const [state,dispatch]=useStateValue()
  const signInHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type:actionTypes.SET_USER,
          user:res.user,
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png" />
      </div>
      <Button type="submit" onClick={signInHandler}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
