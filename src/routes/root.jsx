import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import SwipeableEdgeDrawer from "../components/SwipeableEdgeDrawer";
export default function Root() {
  const [openNav, setOpenNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleNavClick = (path) => {
    setOpenNav(!openNav);
    navigate(path);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader isHome={true} isLoading={isLoading} />
      ) : (
        <>
          <SwipeableEdgeDrawer handleNavClick={handleNavClick} />
          <div
            style={{
              marginTop: "3.4rem",
              marginBottom: "5rem",
              width: "100vw",
            }}
          >
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
