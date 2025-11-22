# Vector Search based Finder Engine

## Objectives Accomplished

- Generated vector embeddings for NEWS data using a TensorFlow model for js
- Connected to the MongoDB Atlas database and create a table with Vector Embeddings
- Wrote an endpoint using Express server that takes a sentence as input and returns any news similar to the conviction entered.
- Search implemented for similar news items using the cosine function
- Created an index over the vectorized data to enable searching using Atlas vector search.

## Creating Search Index in MongoDB:

When creating search index, used json-editor to specify field that needs to be indexed. Also, used GUI to select database name and collection name.

```
{
  "fields": [
    {
      "type": "vector",
      "path": "description_vector",
      "numDimensions": 512,
      "similarity": "cosine|dotProduct|euclidean"
    }
  ]
}
```

Note: M0 free clusters have a limit of 3 search and vector indexes per cluster. Indexes Used: 1 of 3.

### Running Application

- For Development: npm run dev
- Testing BE: Goto localhost:5000/api/v1 for welcome msg

#### Libraries used

- [Express](https://expressjs.com/en/starter/installing.html): npm i express
- [Dot-Env](https://www.npmjs.com/package/dotenv): npm i dotenv
- [Nodemon](https://www.npmjs.com/package/nodemon): npm i nodemon
- [Mongoose](https://mongoosejs.com/docs/): npm install mongoose
- [Tensorflow/tfjs-node](https://www.npmjs.com/package/@tensorflow/tfjs-node): npm i @tensorflow/tfjs-node X Giving error dur to GPU something.
- [Tensorflow/tfjs](https://www.npmjs.com/package/@tensorflow/tfjs): npm i @tensorflow/tfjs
- [Tensorflow/tfjs, univerversal-sentence-encoder](): npm i @tensorflow/tfjs @tensorflow-models/universal-sentence-encoder --force
- [Mongodb](): npm install mongodb

#### Similarity Functions

- Cosine: Measures the cosine of the angle between two vectors. A higher cosine value indicates more remarkable similarity.
- Euclidean: Measures the straight-line distance between two points (vectors) in a multidimensional space. A lower distance indicates higher similarity.
- Dotproduct calculates the sum of the product of corresponding components between two vectors. Higher dot product values indicate greater alignment.

## Findings

- Embedding function plays a crucial role, as this function will be used even for performing a simple search. Just for backend, received these crude metrics. Tensorflow embedder was used for this purpose.

```
vectorEmbeddings_TF: 11.171s
vectorSearch: 114.468ms
```
