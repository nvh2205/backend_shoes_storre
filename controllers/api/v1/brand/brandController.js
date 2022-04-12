const brandService = require('../../../../services/brandService');
const { ERROR_MESSAGES } = require('../../../../utils/constants');

exports.getListBrand = async (req, res) => {
  const listBrand = await brandService.getBrand();
  if (listBrand.length > 0) {
    res.success(listBrand);
  } else {
    res.error({ msg: ERROR_MESSAGES.BAD_REQUEST });
  }
};
