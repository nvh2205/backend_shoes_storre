const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  }
  Address.init(
    {
      userId: DataTypes.INTEGER,
      WardID: DataTypes.INTEGER,
      ProvinceID: DataTypes.INTEGER,
      DistrictID: DataTypes.INTEGER,
      addressDetail: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Address',
    },
  );
  return Address;
};
