const province = require('../data/provinces.json');
const district = require('../data/districts.json');
const ward = require('../data/wards.json');

// get list
// response => array
exports.getListProvinces = () => province;

exports.getListDistricts = (provinceId) =>
  district.filter((doc) => doc.province_code === provinceId);
exports.getListWards = (districtId) =>
  ward.filter((doc) => doc.district_code === districtId);

// get name
// response => string
exports.getNameProvince = (ProvinceId) => {
  const dataProvince = province.filter((doc) => doc.code === ProvinceId);
  return dataProvince[0].name;
};
exports.getNameDistrict = (DistrictId) => {
  const dataDistrict = district.filter((doc) => doc.code === DistrictId);
  return dataDistrict[0].name;
};
exports.getNameWard = (WardId) => {
  const dataWard = ward.filter((doc) => doc.code === WardId);
  return dataWard[0].name;
};
