import * as tf from "@tensorflow/tfjs";
import use from "@tensorflow-models/universal-sentence-encoder";

export const tfEmbedder = async (text) => {
  const model = await use.load();
  const embeddings = await model.embed([text]);
  console.log(embeddings.arraySync());
  console.log(embeddings.arraySync()[0]);
};
