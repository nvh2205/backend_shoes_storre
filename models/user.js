const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association heré
      User.hasMany(models.Token, {
        foreignKey: 'userId',
      });
      User.hasMany(models.Cart, {
        foreignKey: 'userId',
      });
      User.hasOne(models.Address, {
        foreignKey: 'userId',
      });
      User.hasMany(models.Order, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      imgURL: DataTypes.STRING,
    },
    {
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
      scopes: {
        withPassword: {
          attributes: {},
        },
      },
      sequelize,
      modelName: 'User',
      timestamps: true,
      paranoid: true,
    },
  );

  User.prototype.toJSON = function () {
    const values = { ...this.get() };

    // remove hidden field
    delete values.password;
    delete values.passwordResetToken;
    return values;
  };

  return User;
};
