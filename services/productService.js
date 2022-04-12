const { Op, NUMBER } = require('sequelize');
const { Product, ProductSize } = require('../models/index');

exports.updateQuantity = async (data) => {
  Promise.all(
    data.map(async (dataItem) => {
      const product = await ProductSize.findOne({
        where: {
          id: dataItem.ProductSizeId,
        },
        raw: false,
      });
      product.availableQuantity -= dataItem.quantity;
      await product.save();
    }),
  );
};

exports.getListProduct = async (query) => {
  const data = await Product.findAndCountAll({
    limit: query.limit,
    offset: query.skip,
    where: {
      title: { [Op.like]: `%${query.search}%` },
    },
    attributes: { exclude: ['ProductId'] },
    order: [['createdAt', 'DESC']],
  });
  return data;
};
exports.getListProductWithBrand = async (query) => {
  if (Number.isInteger(Number(query.brand))) {
    const data = await Product.findAndCountAll({
      limit: query.limit,
      offset: query.skip,
      where: {
        title: { [Op.like]: `%${query.search}%` },
        BrandId: Number(query.brand),
      },
      attributes: { exclude: ['ProductId'] },
      order: [['createdAt', 'DESC']],
    });
    return data;
  } else {
    return [];
  }
};
exports.getProductById = (id) =>
  Product.findOne({
    where: { id },
    attributes: { exclude: ['ProductId'] },
  });
exports.getTotalProduct = async (id) =>
  ProductSize.sum('availableQuantity', {
    where: { ProductId: id },
  });
exports.getListSizeProduct = (ProductId) =>
  ProductSize.findAll({
    where: { ProductId },
    attributes: { exclude: ['productId'] },
  });
