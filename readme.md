# Vector Search based Finder Engine

## Objectives

- Generating vector embeddings for NEWS data using a TensorFlow model
- Connecting to the MongoDB Atlas database and create a table with Vector Embeddings
- Writing an endpoint using Express server that takes a sentence as input and returns any news similar to the conviction entered.
- Searching for similar news items using the cosine function

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
- [](): npm i @tensorflow/tfjs @tensorflow-models/universal-sentence-encoder --force

#### Similarity Functions

- Cosine: Measures the cosine of the angle between two vectors. A higher cosine value indicates more remarkable similarity.
- Euclidean: Measures the straight-line distance between two points (vectors) in a multidimensional space. A lower distance indicates higher similarity.
- Dotproduct calculates the sum of the product of corresponding components between two vectors. Higher dot product values indicate greater alignment.
