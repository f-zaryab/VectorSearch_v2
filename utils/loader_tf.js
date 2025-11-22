import news from "../data/newsData.js";
import { tfEmbedder } from "./utlis.js";
import { MongoClient } from "mongodb";

const loadDataIntoDB = async () => {
  // console.log("News >> ", news);

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  // const db = client.db(); // Automatically uses the DB in your URI: "MyDatabase"
  const db = client.db(process.env.MONGODB_DBNAME);
  const collection = db.collection(process.env.MONGO_COLLECTION_TF);

  const count = await collection.countDocuments();
  if (count > 0) {
    console.log("Data already exists, skipping load.");
    return;
  }

  try {
    for (const newsItem of news) {
      // correct loop
      const text = newsItem.short_description;
      const description_vector = await tfEmbedder(text);

      if (description_vector?.length > 0) {
        await collection.insertOne({
          link: newsItem.link,
          headline: newsItem.headline,
          category: newsItem.category,
          short_description: newsItem.short_description,
          authors: newsItem.authors,
          date: newsItem.date,
          description_vector,
        });
        console.log(`Inserted: ${newsItem.headline}`);
      } else {
        console.log("No vector generated for:", newsItem.headline);
      }
    }
    console.log("All data inserted successfully.");
  } catch (error) {
    console.error("Error during data loading:", error);
  } finally {
    await client.close();
  }
};

export default loadDataIntoDB;
