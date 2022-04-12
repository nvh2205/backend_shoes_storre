const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Token.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        as: 'userData',
      });
    }
  }
  Token.init(
    {
      token: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      verified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Token',
    },
  );
  return Token;
};
