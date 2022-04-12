const { ERROR_MESSAGES } = require('../../../../utils/constants');
const orderService = require('../../../../services/orderService');

exports.postCheckout = async (req, res, next) => {
  try {
    const itemCartId = JSON.parse(req.query.idItem);
    const userId = req.user.id;
    const data = req.body;

    const checkOrder = await orderService.createOrderItem(
      itemCartId,
      userId,
      data,
    );
    if (!checkOrder) {
      return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
    }
    res.success({ success: true });
  } catch (error) {
    return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
  }
};
