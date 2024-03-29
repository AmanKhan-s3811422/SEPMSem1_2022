const express = require("express");
const cors = require("cors");
const db = require("./src/database");

// Database will be sync'ed in the background.
db.sync();

const app = express();

// Parse requests of content-type - application/json.
app.use(express.json());

// Add CORS suport.
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

// Add user routes.
require("./src/routes/word.routes.js")(express, app);

// Set port, listen for requests.
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
