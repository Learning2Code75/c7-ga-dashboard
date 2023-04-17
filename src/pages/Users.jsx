import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import UserCard from "../components/Users/UserCard";
import { getEvents } from "../redux/actions/events";
import { getPaths } from "../redux/actions/paths";
import { getUsers } from "../redux/actions/users";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.users);
  const [isLoading, setIsLoading] = useState(false);

  const s = () => {
    setIsLoading(false);
  };
  const f = (m) => {
    setIsLoading(false);
    console.log(m);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getUsers(s, f));
    dispatch(getEvents(s, f));
    dispatch(getPaths(s, f));
  }, [dispatch]);
  return (
    <div className="PageContainer">
      <h4
        style={{
          marginLeft: "1rem",
        }}
      >
        Users
      </h4>
      <div>
        <Grid
          container
          gap={2}
          style={{
            padding: ".5rem 1rem",
          }}
        >
          {users.map((user) => (
            <Grid item xs={12} md={6}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>{/* <pre>{JSON.stringify(users, null, 2)}</pre> */}</div>
      {isLoading && <Loader isHome={false} isLoading={isLoading} />}
    </div>
  );
};

export default Users;
