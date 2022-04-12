const express = require('express');

const router = express.Router();
const provinceController = require('../../../controllers/api/v1/provinces/provinceController');
// get list provinces
/**
 * 
 * @api {get} /v1/provinces Get list province
 * @apiVersion 1.0.0
 * @apiGroup Provinces
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {Number} data.code	code province
 * @apiSuccess {Number} data.name	size city name

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "data": [
            {
                "code": 1,
                "name": "TP Hà Nội"
            },
            {
                "code": 2,
                "name": "TP Hồ Chí Minh",
            },
            {
                "code": 3,
                "name": "Tỉnh Phú Thọ"
            }
          ]
      }
 *
 * @apiError Failed to login because wrong email or password
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     {
        "errors": [
          {
            "msg": "Unauthorized"
          }
        ]
      }
 */
router.get('/', provinceController.getProvinces);
// get list district of province
// get list provinces
/**
 * 
 * @api {get} /v1/provinces/:idProvince/districts Get list district
 * @apiVersion 1.0.0
 * @apiGroup Provinces
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {Number} data.code	code district
 * @apiSuccess {Number} data.name	size district name
 *
 * @apiParam {Number} idProvince code of province
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
          "data": [
              {
                  "code": 1,
                  "name": "Quận Cầu Giấy",
              },
              {
                  "code": 2,
                  "name": "Huyện Thanh Trì",
              },
              {
                  "code": 3,
                  "name": "Quận Hoàng Mai"
              }
            ]
        }
 *
 * @apiError Failed to login because wrong email or password
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     {
        "errors": [
          {
            "msg": "Unauthorized"
          }
        ]
      }
 */
router.get('/:ProvinceId/districts', provinceController.getDistricts);
// get list wards of district
/**
 * 
 * @api {get} /v1/provinces/:idDistrict/wards Get list ward
 * @apiVersion 1.0.0
 * @apiGroup Provinces
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {Number} data.code	code ward
 * @apiSuccess {Number} data.name	size ward name
 *
 * @apiParam {Number} idDistrict code of district
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "data": [
            {
                "code": 1,
                "name": "Xã Tam Hiệp",
            },
            {
                "code": 2,
                "name": "Xã Tứ Hiệp",
            },
            {
                "code": 3,
                "name": "Xã Ngũ Hiệp"
            }
          ]
      }
 *
 * @apiError Failed to login because wrong email or password
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     {
        "errors": [
          {
            "msg": "Unauthorized"
          }
        ]
      }
 */
router.get('/:DistrictId/wards', provinceController.getWards);
module.exports = router;
