import axios from "axios";
import { ToastMsg } from "../../component";

export const handleLoginFunction = async (
  loginData,
  authDispatch,
  location,
  navigate
) => {
  try {
    const res = await axios.post("/api/auth/login", loginData);
    if (res.status === 200 || res.status === 201) {
      localStorage.setItem("UserToken", res.data.encodedToken);
      authDispatch({
        type: "LOGIN",
        payload: { token: res.data.encodedToken, user: res.data.foundUser },
      });
      ToastMsg("Log in successful", "success");
      navigate(location.state?.from?.pathname || "/");
    } else {
      console.log("some error with response", res.status);
    }
  } catch (error) {
    if (error.response.status == 401) {
      ToastMsg("Invalid email or password", "error");
    } else {
      ToastMsg("Something went wrong,Try again later!", "error");
    }
  }
};

export const handleSignUp = async (
  userDetails,
  authDispatch,
  navigate,

) => {
  try {
    const res = await axios.post("/api/auth/signup", userDetails);

    if (res.status === 201) {
      authDispatch({
        type: "SIGNUP",
        payload: { user: res.data.foundUser, token: res.data.encodedToken },
      });
      ToastMsg("Successfully Signed Up", "success");
      navigate("../login");
    } else {
      console.log("some issue with response", res.status);
    }
  } catch (error) {
    if (error.response.status === 422) {
      ToastMsg("You are already registered,Please Login", "info");
    } else {
      ToastMsg("Something went wrong,Please Try again later", "error");
    }
  }
};

export const handleLogout = async (authDispatch, navigate) => {
  localStorage.clear();
  authDispatch({
    type: "LOGOUT",
    payload: {
      user: null,
    },
  });
  navigate("/");
  ToastMsg("Successfully Logged out ", "success");
};
