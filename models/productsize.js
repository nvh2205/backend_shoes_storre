const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductSize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductSize.belongsTo(models.Product, {
        foreignKey: 'ProductId',
        onDelete: 'cascade',
      });
      ProductSize.hasMany(models.Cart);
      ProductSize.hasMany(models.OrderItem);
    }
  }
  ProductSize.init(
    {
      size: DataTypes.INTEGER,
      availableQuantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProductSize',
    },
  );
  return ProductSize;
};
