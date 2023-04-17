import { Button, Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import PathStatusChkpt from "./PathStatusChkpt";

const PathStatus = ({ p, pHistory }) => {
  const [open, setOpen] = useState(false);
  const [pth, setPath] = useState({});

  const findPath = () => {
    let path = {};
    for (let i = 0; i < pHistory.length; i++) {
      if (pHistory[i].pid === p.id) {
        path = { ...pHistory[i] };
        for (let j = 0; j < path.checkpoints.length; j++) {
          path.checkpoints[j].info = { ...p.checkpoints[j] };
        }
        setPath(path);
      }
    }
  };
  useEffect(() => {
    findPath();
  }, [p.id]);
  return (
    <div>
      <Dialog
        variant="outlined"
        fullWidth={true}
        open={open}
        onClose={(e, r) => {
          if (r === "backdropClick") {
            setOpen(!open);
          } else {
            setOpen(!open);
          }
        }}
        scroll={"body"}
      >
        <div
          style={{
            padding: "1rem",
          }}
        >
          <h5>{p.name}</h5>
          {pth?.checkpoints?.map((c) => (
            <div>
              <PathStatusChkpt c={c} />
              {/* <pre>{JSON.stringify(c, null, 2)}</pre> */}
            </div>
          ))}
        </div>
      </Dialog>
      <Button onClick={() => setOpen(true)} size="small">
        Path Status
      </Button>
    </div>
  );
};

export default PathStatus;
