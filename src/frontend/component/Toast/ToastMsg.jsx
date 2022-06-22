import React from "react";
import { toast } from "react-toastify";
const ToastMsg = (toastMessage, toastTheme) => {
  const notify = () => {
    toast[toastTheme](toastMessage, {
      position: "bottom-center",
      autoClose: 1000,
      theme: "dark",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  notify();
};

export {ToastMsg};