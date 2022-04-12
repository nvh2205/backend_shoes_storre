const {
  Cart,
  Product,
  Size,
  ProductSize,
  Order,
  OrderItem,
} = require('../models/index');
const { checkCartItem, deleteCartItem } = require('./cartService');
const { updateQuantity } = require('./productService');

exports.createOrderItem = async (itemCartId, userId, data) => {
  const check = await checkCartItem(itemCartId,userId);

  if (check.length === 0||check.length !== itemCartId.length|| check===false ) {
    return false;
  }

  await deleteCartItem(itemCartId);

  let total = 0;

  check.map((item, index) => {
    total += item.price*item.quantity;
  });

  const orderParams = {
    userId,
    address: data.address,
    totalCost: total,
  };

  const order = new Order(orderParams);
  await order.save();

  const totalBill = await Order.findOne({
    where: {
      id:order.id
    },
    raw: false,
  });
  totalBill.totalCost += totalBill.shipmentCost;
  await totalBill.save();

  const orderItemParams = check.map((item, index) => ({
    ProductSizeId: item.productSizeId,
    orderId: order.id,
    quantity: item.quantity,
  }));

  await updateQuantity(orderItemParams);

  await OrderItem.bulkCreate(orderItemParams);

  return true;
};
