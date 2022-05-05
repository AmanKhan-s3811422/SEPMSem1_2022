const db = require("../database");

// Select today's word from the database.
exports.one = async (req, res) => {
  //get date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd

  const word = await db.word.findByPk(today);

  res.json(word);
};