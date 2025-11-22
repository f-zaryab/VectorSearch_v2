import express from "express";
// src
import { getDB } from "../database/db_mongo.js";
import { tfEmbedder } from "../utils/utlis.js";

const router = express.Router();

// Collection Name
const MONGO_COLLECTION = process.env.MONGO_COLLECTION_TF;

router.post("/search", async (req, res) => {
  const text = req.body.text;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const db = getDB(); // reuse existing DB connection
    // const collection = db.collection(MONGO_COLLECTION);
    const collection = db.collection("tf_embeddings_demo");

    console.time("vectorEmbeddings_TF");
    const queryVector = await tfEmbedder(text);
    console.timeEnd("vectorEmbeddings_TF");
    console.time("vectorSearch");

    const aggPipeline = [
      {
        $vectorSearch: {
          index: "vector_search_index", // Atlas vector index name
          path: "description_vector", // Field containing vectors
          queryVector,
          numCandidates: 5,
          limit: 5,
        },
      },
      {
        $project: {
          _id: 0,
          link: 1,
          headline: 1,
          score: { $meta: "vectorSearchScore" },
        },
      },
      {
        $match: { score: { $gt: 0.4 } },
      },
    ];

    const results = await collection.aggregate(aggPipeline).toArray();

    console.timeEnd("vectorSearch");

    res.status(200).json(results);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
