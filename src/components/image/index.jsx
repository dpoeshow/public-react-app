import { useState } from "react";

export const Image = ({ hash, alt, src, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <p>Loading...</p>}
      <div
        style={{
          width: "300px",
          height: "300px",
          display: isLoaded ? "none" : "block",
        }}
      />
      <img
        loading="lazy"
        src={src}
        style={{ display: isLoaded ? "block" : "none" }}
        {...props}
        alt={alt}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    </>
  );
};
