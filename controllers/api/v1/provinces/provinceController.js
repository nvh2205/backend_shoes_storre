const {
  getListProvinces,
  getListDistricts,
  getListWards,
  getNameProvince,
  getNameDistrict,
  getNameWard,
} = require('../../../../services/provincesService');

exports.getProvinces = (req, res) => {
  res.success(getListProvinces());
};
exports.getDistricts = (req, res) => {
  res.success(getListDistricts(Number(req.params.ProvinceId)));
};
exports.getWards = (req, res) => {
  res.success(getListWards(Number(req.params.DistrictId)));
};
