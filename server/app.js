require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const openAIRoute = require('./routes/openAiRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/openai', openAIRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});