import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import SwipeableEdgeDrawer from "../components/SwipeableEdgeDrawer";
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Root() {
  const [openNav, setOpenNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleNavClick = (path) => {
    setOpenNav(!openNav);
    navigate(path);
  };

  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div>
          {isLoading ? (
            <Loader isHome={true} isLoading={isLoading} />
          ) : (
            <div>
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
            </div>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
