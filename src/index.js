import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/fonts.css";
import App from "./App";
import { store } from "./ui/redux/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
				<ToastContainer
					closeButton={true}
					hideProgressBar={true}
					position="top-right"
					transition={Slide}
					autoClose={3000}
				/>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
