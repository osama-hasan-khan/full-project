import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
const PORT = process.env.PORT || 4000;
import connectDB from "./config/db.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
connectDB();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

app.use("/api/tickets", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
