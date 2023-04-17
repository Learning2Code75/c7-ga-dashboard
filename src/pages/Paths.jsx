import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import PathCard from "../components/Paths/PathCard";
import { getPaths } from "../redux/actions/paths";

const Paths = () => {
  const dispatch = useDispatch();
  const paths = useSelector((state) => state?.paths);
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
    dispatch(getPaths(s, f));
  }, [dispatch]);
  return (
    <div className="PageContainer">
      <h4
        style={{
          marginLeft: "1rem",
        }}
      >
        Paths
      </h4>
      <div>
        <div>
          <Grid
            container
            gap={2}
            style={{
              padding: ".5rem 1rem",
            }}
          >
            {paths.map((path) => (
              <Grid item xs={12} md={6}>
                <PathCard path={path} />
              </Grid>
            ))}
          </Grid>
        </div>
        {/* <pre>{JSON.stringify(paths, null, 2)}</pre> */}
        {isLoading && <Loader isHome={false} isLoading={isLoading} />}
      </div>
    </div>
  );
};

export default Paths;
