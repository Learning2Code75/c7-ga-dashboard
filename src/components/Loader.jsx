import { CircularProgress, Dialog } from "@mui/material";
import React from "react";
import Home from "../pages/Home";

const Loader = ({ isLoading, isHome }) => {
  return (
    <div>
      <Dialog open={isLoading} fullScreen={"true"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            background: "rgba(0,0,0,0.85)",
          }}
        >
          {isHome && <Home />}
          <CircularProgress value={25} />
        </div>
      </Dialog>
    </div>
  );
};

export default Loader;
