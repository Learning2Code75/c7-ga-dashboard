import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const PathStatusChkpt = ({ c }) => {
  return (
    <Box sx={{ minWidth: 275, mt: 2 }} key={c.cid}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            {c.info.loc}
          </Typography>

          <Typography variant="body2">
            <a href={c.info.locLink} target="__blank">
              {c.info.locLink}
            </a>
          </Typography>
          <Typography variant="body2">
            Contact :{c.info.contactPerson.name} {"("}
            {c.info.contactPerson.phone}
            {")"}
          </Typography>
          <Typography variant="body2">
            Started:
            <br />
            {c.startTime}
          </Typography>
          <Typography variant="body2">
            Reached:
            <br />
            {c.endTime}
          </Typography>
        </CardContent>
        <CardActions>
          <div
            style={{
              background: c.endTime !== "" ? "cyan" : "transparent",
              padding: ".3rem 1rem",
              borderRadius: "1.5rem",
              fontWeight: "bold",
              fontSize: ".9rem",
            }}
          >
            {c.endTime !== "" ? "Reached" : "On the way"}
          </div>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PathStatusChkpt;
