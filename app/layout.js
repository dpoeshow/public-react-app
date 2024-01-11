import "./globals.css";
// import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/fonts.css";
import localFont from "next/font/local";
import { ToastContainer, Slide } from "react-toastify";
import ReduxProvider from "../redux/provider";
import StyledComponentsRegistry from "./registry";
import Script from "next/script";

export const metadata = {
  title: "Sunfox Solar Cost and Savings Calculator",
  description: "Sunfox Solar System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          {/* <Script
            strategy="lazyOnload"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLs8yb_ANP72I7nKNkiYd51P6zh_R5_4Q&libraries=places&callback=__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__"
          /> */}
          <ToastContainer
            closeButton={true}
            hideProgressBar={true}
            position="top-right"
            transition={Slide}
            autoClose={3000}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
