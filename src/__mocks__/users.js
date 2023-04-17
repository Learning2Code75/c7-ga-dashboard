export const usersData = [
  {
    id: "uid1",
    name: "Neel Choksi",
    phone: "8484848484",
    addr: "Andheri west , Mumbai ",
    rsvp: [
      {
        eid: "eid1",
        response: "yes",
      },
    ],
    paths: ["pid1", "pid2"],
    events: ["eid1"],
    history: {
      paths: [
        {
          pid: "pid1",
          checkpoints: [
            {
              cid: "p1cp1",
              startTime: new Date("2023-12-24").toLocaleString(),
              endTime: "",
            },
            {
              cid: "p1cp2",
              startTime: new Date("2023-12-24").toLocaleString(),
              endTime: new Date("2023-12-24").toLocaleString(),
            },
          ],
        },
      ],
      events: [
        {
          eid: "eid1",
          activities: [{ aid: "e1act1", status: "done" }],
        },
      ],
    },
  },
  {
    id: "uid2",
    name: "Rakesh Choksi",
  },
];
