const bcrypt = require('bcrypt');
const { User } = require('../../../../models');
const { ERROR_MESSAGES } = require('../../../../utils/constants');
const userService = require('../../../../services/userService');
const {
  getListProvinces,
  getNameDistrict,
  getNameWard,
  getNameProvince,
  getListDistricts,
  getListWards,
} = require('../../../../services/provincesService');
const uploadSingleImage = require('../../../../multer/multer');
/**
 * Controller for getting logged user data
 */

exports.updateProfie = async (req, res, next) => {
  try {
    if (req.body.username) {
      return res.error({ msg: ERROR_MESSAGES.UPDATE_USERNAME }, 500);
    }

    const checkUpdate = await userService.updateInfoUser(req.body, req.user.id);

    if (!checkUpdate) {
      return res.error({ msg: ERROR_MESSAGES.UPDATE_EMAIl }, 400);
    }
    res.success({ success: true });
  } catch (error) {
    res.error({ msg: ERROR_MESSAGES.INTERNAL_SERVER }, 500);
  }
};

exports.myProfile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);

    res.success(user);
  } catch (e) {
    res.error({ msg: ERROR_MESSAGES.INTERNAL_SERVER }, 500);
  }
};
exports.changePassword = async (req, res) => {
  const userData = await userService.getUserbyId(req.user.id);
  if (req.body.password === req.body.newpassword) {
    res.error({ msg: ERROR_MESSAGES.DATA_DUPLICATE });
  } else if (bcrypt.compareSync(req.body.password, userData.password)) {
    const result = await userService.updatePassword(
      req.user.id,
      req.body.newpassword,
    );

    if (result) {
      res.success({ success: true });
    } else {
      res.error({ msg: ERROR_MESSAGES.UPDATE_ERR });
    }
  } else {
    res.error({ msg: ERROR_MESSAGES.DATA_INVALID });
  }
};
exports.getAddress = async (req, res) => {
  const addressUser = await userService.getAddressOfUser(req.user.id);
  if (addressUser) {
    addressUser.province = getNameProvince(addressUser.ProvinceID);
    addressUser.district = getNameDistrict(addressUser.DistrictID);
    addressUser.ward = getNameWard(addressUser.WardID);
    res.success(addressUser);
  } else {
    res.error({ msg: ERROR_MESSAGES.DATA_NOT_FOUND });
  }
};
exports.updateAddress = async (req, res) => {
  const { provinceId, districtId, wardId } = req.body;
  const checkProvince = getListProvinces().find(
    (element) => element.code == provinceId,
  );
  const checkDistrict = getListDistricts(Number(provinceId)).find(
    (element) => element.code == districtId,
  );
  const checkWard = getListWards(Number(districtId)).find(
    (element) => element.code == wardId,
  );
  if (!!checkProvince?.code && !!checkDistrict?.code && !!checkWard?.code) {
    const AddressUser = await userService.getAddressOfUser(req.user.id);
    // upsert address

    const update = await userService.updateAddressOfUser(
      req.user.id,
      req.body,
      AddressUser?.id,
    );

    if (update) {
      res.success({ success: true });
    } else {
      res.error({ msg: ERROR_MESSAGES.UPDATE_ERR });
    }
  } else {
    res.error({ msg: ERROR_MESSAGES.ADDRESS_INVAID });
  }
};
exports.getListOrder = async (req, res) => {
  // get list order
  const limit = 20;
  const page =
    Number.isInteger(Number(req.query.page)) & Number(req.query.page) > 1
      ? Number(req.query.page)
      : 1;
  const query = {
    limit,
    skip: (page - 1) * limit,
  };
  const listOrder = await userService.getListOrder(req.user.id, query);
  const ArrayResult = [];
  listOrder.rows.map((item) => {
    const obj = {
      id: item.id,
      title: item.OrderItems[0]?.ProductSize.Product.title,
      imgURL: item.OrderItems[0]?.ProductSize.Product.imgURL,
      datetime: item.createdAt,
    };
    ArrayResult.push(obj);
  });

  const datares = {
    totalItem: listOrder.count,
    currentPage: page,
    totalPage: Math.ceil(listOrder.count / limit),
    list: ArrayResult,
  };
  res.success(datares);
};

exports.getDataOrder = async (req, res) => {
  const OrderId = req.params.OrderId;
  if (Number.isInteger(Number(OrderId))) {
    const data = await userService.getDataOrder(OrderId, req.user.id);
    if (data) {
      res.success(data);
    } else {
      res.error({ msg: ERROR_MESSAGES.DATA_NOT_FOUND });
    }
  } else {
    res.error({ msg: ERROR_MESSAGES.DATA_INVALID });
  }
};

exports.uploadFile = (req, res) => {
  uploadSingleImage(req, res, async function (err) {
    try {
      if (err) {
        console.log(err);
        return res.error({ msg: err.message }, 400);
      }
      const file = req.file;
      const idUser = req.user.id;
      if (!file) {
        return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
      }
      await userService.uploadAvatar(file, idUser);
      res.success({ imgUrl: file.path });
    } catch (error) {
      return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST }, 400);
    }
  })

};

