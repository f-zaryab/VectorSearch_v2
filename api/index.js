import express, { json } from "express";
import dotenv from "dotenv";
// src
import searchTFRouter from "../routes/searchNewsTF.js";
// import { connectDB } from "../database/db.js";
import { connectDB } from "../database/db_mongo.js";
import loadDataIntoDB from "../utils/loader_tf.js";
// import { tfEmbedder } from "../utils/utlis.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();

// Middlewares only --------------------------------------------------
app.use(json());

// Middlewares and Routes --------------------------------------------
app.use("/api/v1/tf", searchTFRouter);

// API-Testing --------------------------------------------------------
app.get("/api/v1", (req, res) => {
  res.send("<h1>Welcome to Backend of Vector-Search Engine</h1>");
});

// Just testing somethings...
// await tfEmbedder("hello world");

// Server -------------------------------------------------------------
const startServer = async () => {
  try {
    // 1️⃣ Connect to MongoDB
    // await connectDB();
    await connectDB();
    console.log("✅ MongoDB connected successfully.");

    // 2️⃣ Load News + embeddings into DB
    await loadDataIntoDB();
    console.log("✅ News data loaded successfully.");

    // 3️⃣ Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 App is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
};

// Start the app
startServer();
