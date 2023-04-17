import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PathCard({ path }) {
  return (
    <Box sx={{ minWidth: 275 }} key={path.id}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {path.name}
          </Typography>

          {path.checkpoints.map((a) => (
            <Box sx={{ minWidth: 275, mt: 2 }} key={a.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div">
                    {a.loc}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    After Message: {a.afterMsg}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <a href={a.locLink} target="__blank">
                      {a.locLink}
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    Contact Person:
                    <br />
                    {a.contactPerson.name}
                    {"  ("}
                    {a.contactPerson.phone}
                    {`)`}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </CardContent>

        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small" color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
