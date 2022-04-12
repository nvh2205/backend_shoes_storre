const checkoutService = require('../../../../services/checkoutService');
const { ERROR_MESSAGES } = require('../../../../utils/constants');

exports.getCheckout = async (req, res, next) => {
  try {
    const checkoutDetail = await checkoutService.getCheckout({
      user: req.user,
      items: req.items,
    });

    res.status(200).json({ data: checkoutDetail });
  } catch (error) {
    res.error({ msg: ERROR_MESSAGES.INTERNAL_SERVER }, 500);
  }
};
