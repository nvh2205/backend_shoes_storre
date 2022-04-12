const sequelize = require('sequelize');
const { Cart, Product, Size, ProductSize } = require('../models/index');

const { Op } = sequelize;

exports.addToCart = async (data) => {
  const quantity = parseInt(data.quantity, 10);

  const checkProductInCart = await Cart.findOne({
    where: {
      userId: data.userId,
      productSizeId: data.productSizeId,
    },
    raw: false,
  });

  let checkQuantity = null;
  let totalQuantity = 0;

  if (checkProductInCart) {
    totalQuantity = checkProductInCart.quantity + quantity;
    checkQuantity = totalQuantity > quantity ? totalQuantity : quantity;
  } else {
    checkQuantity = quantity;
  }

  const product = await ProductSize.findOne({
    attributes: ['id'],
    where: {
      id: data.productSizeId,
      availableQuantity: {
        [Op.gte]: checkQuantity,
      },
    },
  });

  if (!product) {
    return false;
  }

  if (checkProductInCart) {
    checkProductInCart.quantity = totalQuantity;
    await checkProductInCart.save();
    return checkProductInCart;
  }

  const cartParams = {
    userId: data.userId,
    productSizeId: product.id,
    quantity: quantity,
  };

  const cart = new Cart(cartParams);
  await cart.save();

  return cart;
};

exports.infoCartOfUser = async (data) => {
  const listCartItem = await Cart.findAll({
    where: {
      userId: data,
    },
    include: [
      {
        model: ProductSize,
        required: false,
        include: [
          {
            model: Product,
            required: false,
            attributes: [],
          },
        ],
        attributes: [],
      },
    ],
    raw: true,
    attributes: [
      ['id', 'cartId'],
      [sequelize.col('ProductSize.Product.id'), 'productId'],
      'quantity',
      'ProductSize.Product.imgURL',
      'ProductSize.Product.title',
      'ProductSize.Product.price',
      'ProductSize.size',
    ],
  });

  return listCartItem;
};

exports.checkCartItem = async (listCartId, userId) => {
  const checkItemInCart = await Cart.findAll({
    where: {
      id: {
        [Op.in]: listCartId,
      },
      userId: userId,
    },
    include: [
      {
        model: ProductSize,
        // as: 'productSizeData',
        attributes: [],
        include: [
          {
            model: Product,
            // as: 'productData',
            required: false,
            attributes: [],
          },
        ],
      },
    ],
    raw: true,
    attributes: [
      [sequelize.col('ProductSize.id'), 'productSizeId'],
      'quantity',
      'ProductSize.availableQuantity',
      'ProductSize.Product.price',
    ],
  });

  const checkQuantity = checkItemInCart.every(
    (item) => item.quantity <= item.availableQuantity,
  );

  if (!checkQuantity) {
    return false;
  }
  return checkItemInCart;
};

exports.deleteCartItem = async (data) => {
  await Cart.destroy({
    where: {
      id: {
        [Op.in]: data,
      },
    },
  });
};

exports.updateCartItem = async (data) => {
  const quantity = parseInt(data.quantity, 10);

  const cartItem = await Cart.findOne({
    where: {
      id: data.cartId,
    },
  });

  const productInCart = await ProductSize.findByPk(cartItem.productSizeId);

  const productSize = await ProductSize.findOne({
    where: {
      productId: data.productId,
      size: data.size,
      availableQuantity: {
        [Op.gte]: quantity,
      },
    },
  });

  if (!productSize || productInCart.productId !== data.productId) {
    return false;
  }

  return Cart.update(
    {
      quantity: quantity,
      productSizeId: productSize.id,
    },
    {
      where: {
        id: data.cartId,
        userId: data.userId,
      },
    },
  );
};

exports.deleteACartItem = async (cartId, userId) => {
  return Cart.destroy({
    where: {
      id: cartId,
      userId: userId,
    },
  });
};
