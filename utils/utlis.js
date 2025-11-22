import * as tf from "@tensorflow/tfjs";
import use from "@tensorflow-models/universal-sentence-encoder";

let model = null;

export const tfEmbedder = async (text) => {
  if (!model) {
    model = await use.load();
  }

  const embeddings = await model.embed([text]);
  //   console.log(embeddings.arraySync());
  //   console.log(embeddings.arraySync()[0]);
  const vector = embeddings.arraySync()[0];
  return vector;
};
