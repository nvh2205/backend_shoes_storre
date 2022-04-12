const { ERROR_MESSAGES } = require('../../../../utils/constants');
const cartService = require('../../../../services/cartService');

exports.createCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const data = { userId, ...req.body };
    const checkAddToCart = await cartService.addToCart(data);

    if (!checkAddToCart) {
      return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
    }

    res.success(checkAddToCart);
  } catch (error) {
    return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
  }
};

exports.getInfoCart = async (req, res) => {
  try {
    const listCart = await cartService.infoCartOfUser(req.user.id);
    res.json({data:listCart});
  } catch (error) {
    res.error({ msg: ERROR_MESSAGES.INTERNAL_SERVER }, 500);
  }
};

exports.updateCart = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.id;
    const data = { cartId: id, userId, ...req.body };

    const ckeckUpdate = await cartService.updateCartItem(data);

    if (!ckeckUpdate) {
      return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
    }
    res.success({ success: true });
  } catch (error) {
    return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const userId = req.user.id;
    const checkDeleteCart = await cartService.deleteACartItem(cartId, userId);
    
    if(!checkDeleteCart) {
      return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
    }

    res.success({ success: true });
  } catch (error) {
    return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
  }
};
