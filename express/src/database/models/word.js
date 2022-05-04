module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "word",
    {
      date: {
        type: DataTypes.STRING(32),
        primaryKey: true,
      },
      word: {
        type: DataTypes.STRING(32),
        allowNull: false,
      }
    }
  );
