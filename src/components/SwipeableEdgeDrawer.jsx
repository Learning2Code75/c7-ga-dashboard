import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { RiRoadMapFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import ToggleColorMode from "./ToggleColorMode";
const drawerBleeding = 56;
const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <div
          style={{
            position: "fixed",
            top: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: theme.palette.primary.contrastText,
            height: "3.4rem",
          }}
        >
          <Button onClick={toggleDrawer(true)}>Dashboard Features</Button>
          <ToggleColorMode />
        </div>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            Features
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <List>
            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("/c7-ga-dashboard");
              }}
            >
              <ListItemButton>
                <ListItemText>
                  <div
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    GA Dashboard
                  </div>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("events/");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <BsFillCalendarEventFill />
                </ListItemIcon>
                <ListItemText>Events</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("paths/");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <RiRoadMapFill />
                </ListItemIcon>
                <ListItemText>Paths</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("users/");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <FaUser />
                </ListItemIcon>
                <ListItemText>Users</ListItemText>
              </ListItemButton>
            </ListItem>

            {/* <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("contacts/1");
              }}
            >
              <ListItemButton>
                <ListItemText>Your Name</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => {
                props.handleNavClick("contacts/2");
              }}
            >
              <ListItemButton>
                <ListItemText>Your Friend</ListItemText>
              </ListItemButton>
            </ListItem> */}
          </List>
          {/* <Skeleton variant="rectangular" height="100%" /> */}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
