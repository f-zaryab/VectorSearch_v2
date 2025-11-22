import express, { json } from "express";
import dotenv from "dotenv";
// src
import { connectDB } from "../database/db.js";
import { tfEmbedder } from "../utils/utlis.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();

// Middlewares only --------------------------------------------------
app.use(json());

// Middlewares and Routes --------------------------------------------
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/admin", adminRoute);
// app.use("/api/v1/songs", songRoute);
// app.use("/api/v1/albums", albumRoute);
// app.use("/api/v1/stats", statsRoute);

// API-Testing --------------------------------------------------------
app.get("/api/v1", (req, res) => {
  res.send("<h1>Welcome to Backend of Vector-Search Engine</h1>");
});

// Just testing somethings...
// await tfEmbedder("hello world");

// Server -------------------------------------------------------------
app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening on Port: ${PORT}`);
});
