const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WishList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WishList.belongsTo(models.User, {
        foreignKey: 'UserId',
        onDelete: 'cascade',
      });
      WishList.hasMany(models.Product, {
        foreignKey: 'ProductId',
        onDelete: 'cascade',
      });
    }
  }
  WishList.init(
    {},
    {
      sequelize,
      modelName: 'WishList',
    },
  );
  return WishList;
};
