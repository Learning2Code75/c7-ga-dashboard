import { Button, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Loader from "../components/Loader";
import { getEvents } from "../redux/actions/events";
import { getUsers } from "../redux/actions/users";
import { useReactToPrint } from "react-to-print";
import { AiOutlineFilePdf } from "react-icons/ai";
const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state?.events);
  const [isLoading, setIsLoading] = useState(false);
  const srRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => srRef.current,
    documentTitle: `all_events`,
    onAfterPrint: () => alert("All events printed"),
  });
  const s = () => {
    setIsLoading(false);
  };
  const f = (m) => {
    setIsLoading(false);
    console.log(m);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getEvents(s, f));
    dispatch(getUsers(s, f));
  }, [dispatch]);
  return (
    <div className="PageContainer">
      <h4
        style={{
          paddingLeft: "1rem",
        }}
      >
        Events
        <Button
          style={{
            marginLeft: "1rem",
          }}
          size="large"
          onClick={handlePrint}
        >
          Download PDF <AiOutlineFilePdf />
        </Button>
      </h4>
      <div>
        <Grid
          container
          gap={2}
          style={{
            padding: ".5rem 1rem",
          }}
          ref={srRef}
        >
          {events.map((eve) => (
            <Grid item xs={12} md={6}>
              <EventCard eve={eve} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        {/* <pre>{JSON.stringify(events, null, 2)}</pre> */}
        {isLoading && <Loader isHome={false} isLoading={isLoading} />}
      </div>
    </div>
  );
};

export default Events;
