module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "word",
    {
      date: {
        type: DataTypes.DATEONLY,
        primaryKey: true,
      },
      word: {
        type: DataTypes.STRING(5),
        allowNull: false,
      }
    }
  );
