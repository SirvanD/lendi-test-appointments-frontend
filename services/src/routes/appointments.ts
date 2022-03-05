import { Router } from "express";

var appointments = [
  { id: 1, brokerId: 1, date: "15/10/2021" },
  { id: 2, brokerId: 3, date: "22/11/2021" },
  { id: 3, brokerId: 3, date: "23/11/2021" },
  { id: 4, brokerId: 4, date: "10/5/2021" },
];
appointments.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0));
appointments.sort((a, b) =>
  a.brokerId > b.brokerId ? 1 : b.brokerId > a.brokerId ? -1 : 0
);

const router = Router();

export default router;

router.get("/", (req, res) => {
  res.send(appointments);
});
