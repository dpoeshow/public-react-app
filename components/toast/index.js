import { ToastContainer, Slide } from "react-toastify";

const Toast = () => {
  return (
    <ToastContainer
      closeButton={true}
      hideProgressBar={true}
      position="top-right"
      transition={Slide}
      autoClose={3000}
    />
  );
};

export default Toast;
