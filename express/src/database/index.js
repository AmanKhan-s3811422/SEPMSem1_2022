const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");

const db = {
  Op: Sequelize.Op,
};

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.PORT,
  dialect: config.DIALECT,
});

db.word = require("./models/word.js")(db.sequelize, DataTypes);

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync();

  // Can sync with force if the schema has become out of date - note that syncing with force is a destructive operation.
  // await db.sequelize.sync({ force: true });

  await seedData();
};

async function seedData() {
  const count = await db.word.count();

  if (!(count > 0)) {
    var words = ["scrap","mouth","eagle","close","truth","swipe","crude","guilt","smart","shake","movie","sweat","screw","smoke","nerve","novel","favor","miner","skate","lease","feign","power","sight","solid","cabin","smash","touch","score","marsh","trunk","world","haunt"]
    for (let i = 1; i <= 31; i++) {
      if (i < 10) {
        var dd = '2022-05-0' + i
      } else {
        var dd = '2022-05-' + i
      }
      
      await db.word.create({
        date: dd,
        word: words[i]
      });
    }
    
  }
}

module.exports = db;
