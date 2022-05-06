module.exports = (express, app) => {
    const controller = require("../controllers/word.controller.js");
    const router = express.Router();
  
    // Select today's word.
    router.get("/", controller.one);
  
    // Add routes to server.
    app.use("/api/words", router);
  };
  