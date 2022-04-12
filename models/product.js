const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        onDelete: 'CASCADE',
      });

      // define association here
      Product.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        onDelete: 'CASCADE',
      });
      Product.hasMany(models.ProductSize, {
        onDelete: 'CASCADE',
        foreignKey: 'productId',
        // as: 'productData',
      });
    }
  }
  Product.init(
    {
      brandId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      imgURL: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
