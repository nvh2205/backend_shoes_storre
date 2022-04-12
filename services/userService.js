const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const {
  User,
  Address,
  Order,
  OrderItem,
  ProductSize,
  Product,
} = require('../models/index');

const {
  generateAccessToken,
  generateHashedPassword,
} = require('../utils/generator');
const statusMess = require('../utils/constants');

/**
 * Check crendential of user
 *
 * @param {object} data Credentials data with email and password
 *
 * @returns {boolean|object} Return data if correct, false if incorrect credentials
 */
exports.checkUserCredentials = async function (data) {
  const candidateUser = await User.scope('withPassword').findOne({
    where: {
      [Op.or]: [{ username: data.username }, { email: data.username }],
    },
  });

  if (!candidateUser) {
    return false;
  }
  if (!bcrypt.compareSync(data.password, candidateUser.password)) {
    return false;
  }

  return candidateUser;
};

exports.getUserbyId = async function (data) {
  const users = await User.scope('withPassword').findByPk(data);

  return users;
};

/**
 * Create new user
 *
 * @param {object} data Data for new user
 *
 * @returns {object} Return created user
 */
exports.createNewUser = async function (data) {
  // hash a password
  // generate a salt and hash on separate function calls
  data.password = generateHashedPassword(data.password);

  const user = new User(data);
  await user.save();

  return user;
};

/**
 * Generate authorization response for user
 *
 * @param {object} user User object to create authorization token
 *
 * @returns {object} Return response for user authorization
 */
exports.generateAuthResponse = function (user) {
  const token = generateAccessToken({
    id: user.id,
    username: user.username,
    iat: new Date().getTime(),
  });

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
    },
  };
};
exports.updatePassword = (id, password) => {
  const newpassword = bcrypt.hashSync(password, 10);
  return User.update(
    { password: newpassword },
    {
      where: {
        id,
      },
    },
  );
};

exports.getAddressOfUser = (UserId) => Address.findOne({ where: { UserId } });
exports.updateAddressOfUser = (userId, address, id) => {
  const data = {
    ProvinceID: Number(address.provinceId),
    DistrictID: Number(address.districtId),
    WardID: Number(address.wardId),
    addressDetail: address.addressDetail,
    phone: address.phone,
    userId,
    id,
  };
  return Address.upsert(data, { where: { id } });
};
exports.getListOrder = async (id, query) => {
  const listOrder = await Order.findAll({
    where: { UserId: id },
    limit: query.limit,
    offset: query.skip,
    raw: false,
    nest: true,
    attributes: ['Address', 'shipmentCost', 'totalCost', 'createdAt', 'id'],
    include: [
      {
        model: OrderItem,
        required: false,
        attributes: ['quantity'],
        include: [
          {
            model: ProductSize,
            required: false,
            attributes: ['size'],
            include: [
              {
                model: Product,
                required: false,
                attributes: { exclude: ['ProductId'] },
              },
            ],
          },
        ],
      },
    ],
  });

  const count = await Order.count({ where: { UserId: id } });
  return {
    count,
    rows: listOrder,
  };
};
exports.getDataOrder = async (OrderId, userId) => {
  const orderDetail = await Order.findOne({ where: { id: OrderId, userId } });
  if (orderDetail) {
    const item = await OrderItem.findAll({
      where: { OrderId },
      raw: true,
      nest: true,
      attributes: ['quantity'],
      include: [
        {
          model: ProductSize,
          required: false,
          attributes: ['size'],
          include: [
            {
              model: Product,
              required: false,
              attributes: ['id', 'title', 'imgURL', 'price'],
            },
          ],
        },
      ],
    });
    return {
      id: orderDetail?.id,
      address: orderDetail?.address,
      shipmentCost: orderDetail?.shipmentCost,
      totalCost: orderDetail?.totalCost,
      createdAt: orderDetail?.createdAt,
      orderItem: item,
    };
  } else {
    return null
  }
};
/**
  Update info user
 * @param {object,int} data Data for user
 *
 * @returns {object} Return User information has been updated
*/

exports.updateInfoUser = async function (data, id) {
  return User.update(
    { fullname: data.fullname },
    {
      where: { id },
    },
  );
};

//Upload img user
exports.uploadAvatar = async (data, idUser) => {
  return User.update(
    { imgURL: data.path },
    {
      where: { id: idUser },
    },
  );
};
