const express = require('express');
const { postChangePassword } = require('../../../validator/password');
const { putUpdateAddress } = require('../../../validator/address');
const userController = require('../../../controllers/api/v1/user/userController');
const userValidator = require('../../../validator/user');
const signedInMiddleware = require('../../../middleware/signedIn');

const router = express.Router();

const upload = require('../../../multer/multer');


/**
 * 
 * @api {post} /v1/uploadfile upload avatar user
 * @apiVersion 1.0.0
 * @apiGroup Users
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
*
* @apiParam {File} file Avatar user

 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.imgURL

 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
{
    "data": {
        "imgURL": "upload/images/1645149573472-876936637-giai-nen-file-img.jpg
    }
}
}
 *
 * @apiError Failed to login because wrong email or password
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     Error 
        {
 *       "errors": [
                {
                   "msg":"BAD_REQUEST"
                },
            ]
 *     }
 */
router.post('/uploadfile', userController.uploadFile);

/**
 * 
 * @api {put} /v1/user update user
 * @apiVersion 1.0.0
 * @apiGroup Users
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
*
* @apiParam {String} fullname User's name

* @apiSuccess {String} success	 

 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "data": {
          "success":true
        },
      }
 *
 * @apiError Failed to login because wrong email or password
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     Error 
        {
 *       "errors": [
                {
                   "msg":"BAD_REQUEST"
                },
            ]
 *     }
 */
router.put('/', userValidator.postUpdateInfoUser, userController.updateProfie);

// change password
/**
 * 
 * @api {post} /v1/user/password Change password of User
 * @apiVersion 1.0.0
 * @apiGroup Users
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {String} success	 
 * @apiParam {String} password current password
 * @apiParam {String} newpassword newpassword
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "data": {
          "success":true
        },
      }
 *
 * @apiError Failed to login because wrong email or password
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     Error 
        {
          "success": false,
            "msg": [
                  {
                      "value": "district",
                      "msg": "District is empty",
                      "param": "district",
                      "location": "body"
                  }
              ]
          }
          or
          {
            "errors": [
              {
                "msg": "ADDRESS INVALID"
              }
            ]
          }
 */
router.post('/password', postChangePassword, userController.changePassword);
// get address of user
/**
 * 
 * @api {get} /v1/user/address Get Address of User
 * @apiVersion 1.0.0
 * @apiGroup Users
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {String} data.Id	 id of address
 * @apiSuccess {String} data.provinceId	province's Id in address
 * @apiSuccess {String} data.provinceId	district's Id in address
 * @apiSuccess {String} data.wardId	ward's Id in address
 * @apiSuccess {String} data.addressDetail futher detail in user's address
 * @apiSuccess {String} data.phone receivers's phone number		 
 * @apiSuccess {String} province provinces name		 
 * @apiSuccess {String} district districts name		 
 * @apiSuccess {String} ward wards name	
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "data": {
          "id": 4,
          "userId": 4,
          "WardID": 37,
          "ProvinceID": 1,
          "DistrictID": 2,
          "addressDetail": "cdcnd dvdc fvdcdccdc",
          "phone": "0823547147",
          "createdAt": "2022-02-16T13:36:52.000Z",
          "updatedAt": "2022-02-17T03:24:19.000Z",
          "province": "Thành phố Hà Nội",
          "district": "Quận Hoàn Kiếm",
          "ward": "Phường Phúc Tân"
        }
      }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     Error 
       {
        "success": false,
          "msg": [
                {
                    "value": "distric",
                    "msg": "District is empty",
                    "param": "district",
                    "location": "body"
                }
            ]
        }
 */
router.get('/address', userController.getAddress);
// update address of user
/**
 * 
 * @api {put} /v1/user/address Update Address of User
 * @apiVersion 1.0.0
 * @apiGroup Users
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {String} success	 
 * @apiParam {Number} provinceId province code
 * @apiParam {Number} districtId district code
 * @apiParam {Number} wardId ward code
 * @apiParam {String} addressDetail address detail
 * @apiParam {String} phone phonenumber vietnam
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "data": {
          "success":true
        },
      }
 *
 * @apiError Data Address invalid
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     Error 
        {
          "success": false,
            "msg": [
                  {
                      "value": "district",
                      "msg": "District is empty",
                      "param": "district",
                      "location": "body"
                  }
              ]
          }
          or
          {
            "errors": [
              {
                "msg": "ADDRESS INVALID"
              }
            ]
          }
 */
router.put('/address', putUpdateAddress, userController.updateAddress);
// order history
/**
 * 
 * @api {get} /v1/user/orders Get Order of User
 * @apiVersion 1.0.0
 * @apiGroup Users
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {Number} data.totalItem	 Total orders of user
 * @apiSuccess {Number} data.pagination		Object infomation of pagination
 * @apiSuccess {Number} data.pagination.totalPage	 Total pages
 * @apiSuccess {Number} data.pagination.currentPage	 Current Page No
 * @apiSuccess {Number} data.pagination.totalPerPage	 Total orders in the page
 * @apiSuccess {Number} data.list.id	id of an order
 * @apiSuccess {String} data.list.title		product's title in an order
 * @apiSuccess {Datetime} data.list.createdAt	 created datetime
 * @apiSuccess {String} data.list.imgURL	 URL of product
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
          "data": {
            "totalItem": 3,
            "currentPage": 0,
            "totalPage": 1,
            "list": [
              {
                "id": 1,
                "tilte": "ULTRA BOOST DNA CTY",
                "imgURL": "/apidocs/img/ULTRA-BOOST-DNA-CTY.webp",
                "datetime": "2022-02-16T09:44:15.000Z"
              },
              {
                "id": 6,
                "tilte": "ULTRA BOOST DNA CTY",
                "imgURL": "/apidocs/img/ULTRA-BOOST-DNA-CTY.webp",
                "datetime": "2022-02-16T10:00:32.000Z"
              },
              {
                "id": 9,
                "tilte": "ULTRA BOOST DNA CTY",
                "imgURL": "/apidocs/img/ULTRA-BOOST-DNA-CTY.webp",
                "datetime": "2022-02-16T10:07:27.000Z"
              }
            ]
          }
}
 *
 * @apiError Unknown Data order 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     Error 
        {
          "errors": [
            {
              "msg": "Data not found"
            }
          ]
        }
 */
router.get('/orders', userController.getListOrder);
// order detail
/**
 * 
 * @api {get} /v1/user/orders/:OrderId Get Order detail
 * @apiVersion 1.0.0
 * @apiGroup Orders
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {Number} data.address địa chỉ đơn hàng
 * @apiSuccess {Number} data.shipmentCost	phí ship của đơn hàng
 * @apiSuccess {Number} data.totalCost tổng thanh toán
 * @apiSuccess {Number} data.createdAt ngày khởi tạo đơn hàng
 * @apiSuccess {Number} data.id mã đơn hàng
 * @apiSuccess {Number} data.orderItem.quantity số lượng sản phẩm
 * @apiSuccess {Number} data.orderItem.ProductSize.size	size của sản phẩm
 * @apiSuccess {Number} data.orderItem.ProductSize.Product dư liệu sản phẩm
 *
 * @apiParam {Number} OrderId id of orders
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
          "data": {
            "id": 1,
            "address": "cdacdcdac",
            "shipmentCost": 1000,
            "totalCost": 8070000,
            "createdAt": "2022-02-16T02:44:15.000Z",
            "orderItem": [
              {
                "quantity": 2,
                "ProductSize": {
                  "size": 40,
                  "Product": {
                    "id": 1,
                    "title": "ULTRA BOOST DNA CTY",
                    "imgURL": "/apidocs/img/ULTRA-BOOST-DNA-CTY.webp",
                    "price": 2690000
                  }
                }
              },
              {
                "quantity": 1,
                "ProductSize": {
                  "size": 41,
                  "Product": {
                    "id": 2,
                    "title": "ULTRA BOOST 2021 VIVID RED",
                    "imgURL": "/apidocs/img/ULTRA-BOOST-2021-VIVID-RED.jpg",
                    "price": 2690000
                  }
                }
              }
            ]
          }
        }
 *
 * @apiError Unknown Data order 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     Error 
        {
          "errors": [
            {
              "msg": "Data not found"
            }
          ]
        }
 */
router.get('/orders/:OrderId', userController.getDataOrder);
module.exports = router;
