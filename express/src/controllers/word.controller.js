const db = require("../database");

// Select today's word from the database.
exports.one = async (req, res) => {
  const user = await db.word.findByPk("day");

  res.json(user);
};