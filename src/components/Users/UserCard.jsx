import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import PathStatus from "./PathStatus";

export default function UserCard({ user }) {
  const [isRespOpen, setIsRespOpen] = React.useState(false);
  const paths = useSelector((state) => state?.paths);
  const events = useSelector((state) => state?.events);

  const findPath = (pid) => {
    for (let i = 0; i < paths?.length; i++) {
      if (paths[i].id === pid) {
        return paths[i];
      }
    }
  };

  return (
    <Box sx={{ minWidth: 275 }} key={user.id}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {user.name}
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.phone}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.addr}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Paths:
          </Typography>
          <Divider />

          {user?.paths?.map((p) => {
            let pth = findPath(p);
            let path_name = pth.name;

            let user_paths = user?.history?.paths;
            let up = {};
            for (let i = 0; i < user_paths.length; i++) {
              if (user_paths[i].pid === p) {
                up = { ...user_paths[i] };
              }
            }
            console.log(up);
            let reached = false;
            if (up?.checkpoints) {
              reached =
                up?.checkpoints[up?.checkpoints?.length - 1]?.endTime !== "" &&
                up?.checkpoints[up?.checkpoints?.length - 1]?.endTime !==
                  undefined;
            }

            return (
              <>
                <div
                  style={{
                    fontSize: ".9rem",
                  }}
                >
                  {path_name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <PathStatus p={pth} pHistory={user?.history?.paths} />
                  {reached && (
                    <div
                      style={{
                        fontSize: ".8rem",
                      }}
                    >
                      {up?.checkpoints[up?.checkpoints?.length - 1]?.endTime}
                    </div>
                  )}
                  <div
                    style={{
                      background: reached ? "cyan" : "transparent",
                      padding: ".1rem .5rem",
                      borderRadius: "1.5rem",
                      fontWeight: "bold",
                      fontSize: ".67rem",
                    }}
                  >
                    {reached ? "Reached" : "On the way"}
                  </div>
                </div>
                <Divider />
              </>
            );
          })}
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <a href={eve.locationLink} target="__blank">
              {eve.locationLink}
            </a>
          </Typography>
          <Typography variant="body2">
            Starting:
            <br />
            {eve.timeOfStart}
          </Typography>
          <Typography
            variant="body2"
            style={{
              marginTop: ".5rem",
            }}
          >
            Started at :{eve.realTimeOfStart}
          </Typography>

          {eve.activities.map((a) => (
            <Box sx={{ minWidth: 275, mt: 2 }} key={a.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div">
                    {a.name}
                  </Typography>
                  <Typography variant="body2">
                    Response type : {a.responseType}
                  </Typography>
                  <Typography variant="body2">
                    After Message :{a.afterMessage}
                  </Typography>
                  <Typography variant="body2">
                    Starting:
                    <br />
                    {a.startTime}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      marginTop: ".5rem",
                    }}
                  >
                    Started at :{a.realTimeOfStart}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      setIsRespOpen(true);
                      populateUsers(a.whoResponded);
                    }}
                  >
                    {a.numResponded}
                    {"     "}Responses
                  </Button>
                  <Dialog
                    variant="outlined"
                    fullWidth={true}
                    open={isRespOpen}
                    onClose={(e, r) => {
                      if (r === "backdropClick") {
                        setIsRespOpen(!isRespOpen);
                      } else {
                        setIsRespOpen(!isRespOpen);
                      }
                    }}
                    scroll={"body"}
                  >
                    <div
                      style={{
                        padding: "1rem",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Total : {a.numResponded}
                      </div>
                      {whoResp.map((w, idx) => (
                        <div key={idx}>{w}</div>
                      ))}
                    </div>
                  </Dialog>
                </CardActions>
              </Card>
            </Box>
          ))} */}
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
