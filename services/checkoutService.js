const sequelize = require('sequelize');
const { Op } = require('sequelize');
const {
  Cart,
  Product,
  ProductSize,
  User,
  Address,
} = require('../models/index');
const provincesService = require('./provincesService');

exports.getCheckout = async (data) => {
  const { user } = data;
  const checkoutItems = data.items;
  const itemsDetail = await Cart.findAll({
    where: {
      id: {
        [Op.in]: checkoutItems,
      },
    },
    attributes: {
      exclude: ['UserId', 'ProductSizeId', 'createdAt', 'updatedAt'],
    },
    raw: true,
    nest: true,
    include: [
      {
        model: ProductSize,
        attributes: ['size'],
        require: false,
        include: {
          model: Product,
          attributes: ['title', 'price', 'imgURL'],
          require: false,
        },
      },
    ],
  });

  const items = itemsDetail.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    size: item.ProductSize.size,
    title: item.ProductSize.Product.title,
    price: item.ProductSize.Product.price,
    imgURL: `${item.ProductSize.Product.imgURL}`,
  }));

  const shipmentCost = 35000;
  const totalCost =
    items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr) + shipmentCost;

  const address = await Address.findOne({ where: { UserId: user.id } });

  let fullAddress = '';
  let phone = '';

  if (address) {
    fullAddress = `${address.addressDetail}, ${provincesService.getNameWard(
      address.WardID,
    )}, ${provincesService.getNameDistrict(
      address.DistrictID,
    )}, ${provincesService.getNameProvince(address.ProvinceID)}`;
    phone = address.phone;
  }

  return {
    items,
    address: { fullAddress, phone },
    shipmentCost,
    totalCost,
  };
};
