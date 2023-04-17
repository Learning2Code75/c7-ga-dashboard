import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { AiOutlineFilePdf } from "react-icons/ai";

export default function EventCard({ eve }) {
  const [isRespOpen, setIsRespOpen] = React.useState(false);
  const users = useSelector((state) => state?.users);
  const [whoResp, setWhoResp] = React.useState([]);
  const srRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => srRef.current,
    documentTitle: `${eve.name}`,
    onAfterPrint: () => alert("Event printed"),
  });

  const findUser = (i) => {
    let new_user = "";
    users.forEach((u) => {
      if (u.id === i) {
        new_user = u.name;
      }
    });
    return new_user;
  };
  const populateUsers = (whoArr) => {
    let new_who_resp = [];
    whoArr.forEach((who) => {
      let new_user = findUser(who);
      new_who_resp.push(new_user);
    });
    setWhoResp(new_who_resp);
  };
  return (
    <Box sx={{ minWidth: 275, ml: 2 }} key={eve.id} ref={srRef}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {eve.name}
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {eve.location}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
          ))}
        </CardContent>

        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small" color="secondary">
            Delete
          </Button>
          <Button size="large" onClick={handlePrint}>
            Download PDF <AiOutlineFilePdf />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
