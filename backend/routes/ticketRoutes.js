import express from "express";

const router = express.Router();
import {
  postTickets,
  getTickets,
  updateTicket,
  deleteTicket,
} from "../controllers/ticketController.js";

router.post("/post", postTickets);

router.get("/get", getTickets);

router.put("/update/:id", updateTicket);

router.delete("/delete/:id", deleteTicket);

export default router;
