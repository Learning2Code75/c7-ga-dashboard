import { Button, CircularProgress } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import Loader from "../components/Loader";
import { wait } from "../utils/helpers";
const EVENTS = [
  { id: 1, title: "Event 1" },
  { id: 1, title: "Event 2" },
  { id: 1, title: "Event 3" },
];
const Posts = () => {
  const queryClient = useQueryClient();
  const eventsQuery = useQuery({
    queryKey: ["events"],
    queryFn: () => wait(1000).then(() => [...EVENTS]),
    // queryFn: () => Promise.reject("error msg"),
  });
  const newEventMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        EVENTS.push({ id: crypto.randomUUID(), title })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
    },
  });
  if (eventsQuery.isLoading) {
    return <Loader isHome={false} isLoading={eventsQuery.isLoading} />;
  }
  if (eventsQuery.error) {
    return <pre>{JSON.stringify(eventsQuery.error)}</pre>;
  }
  return (
    <div className="PageContainer">
      <h4>Events</h4>
      <div>
        {eventsQuery.data.map((eve) => (
          <div key={eve.id}>
            <div>{eve.title}</div>
          </div>
        ))}
        <Button
          disabled={newEventMutation.isLoading}
          onClick={() => newEventMutation.mutate("new Event")}
        >
          Add New Event
          <span>
            {newEventMutation.isLoading && (
              <CircularProgress
                style={{
                  width: "10px",
                  height: "10px",
                }}
                value={25}
                size="xs"
              />
            )}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Posts;
