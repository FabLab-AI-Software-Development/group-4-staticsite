const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
dotenv.config({ path: ".env" });
const openaiRoutes = require('./routes/openai.js');


const { PostgresEmbeddingsService } = require('./controllers/embedding_search.js');

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const postgresService = new PostgresEmbeddingsService();

// Ensure the database and other services are connected before starting the server
async function initializeServices() {
    await postgresService.connect();
}

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "API for quotes and authors. Check out the documentation below🐻",
    api_documentation:
      "https://documenter.getpostman.com/view/21884902/UzJQqEYA",
  });
});

app.get('/search', async (req, res) => {
  const prompt = req.query.prompt;

  if (prompt == undefined) {
      res.send('Pass a prompt in the URL, e.g. /search?prompt=Hello');
  } else {
      let places;

      places = await postgresService.searchPlaces(prompt, 0.3, 6);

      res.send(places);
  }
});

app.use("/api/v1/quotes", require("./routes/quotes"));
app.use("/api/v1/authors", require("./routes/authors"));
app.use("/api/v1/users", require("./routes/users"));
app.use('/api/openai', openaiRoutes);


module.exports = app;
