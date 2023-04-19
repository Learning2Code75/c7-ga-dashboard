import React from "react";
import { imgUrls } from "../imgs/imgUrls";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <img
        style={{
          borderRadius: "1rem",
          backgroundColor: "rgb(0,0,0)",
          opacity: "75%",
        }}
        src={imgUrls.home}
        alt="image"
        height="300"
        width="350"
      />
      <a href="https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document">
        vecteezy.com
      </a>
      <div>Dashboard for Guest Activities </div>
    </div>
  );
};

export default Home;
