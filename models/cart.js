const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });

      Cart.belongsTo(models.ProductSize, {
        foreignKey: 'productSizeId',
        onDelete: 'CASCADE',
        // as: 'productSizeData',
      });
    }
  }
  Cart.init(
    {
      userId: DataTypes.INTEGER,
      productSizeId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cart',
    },
  );
  return Cart;
};
