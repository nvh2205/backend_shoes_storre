const express = require('express');
const signedInMiddleware = require('../../../middleware/signedIn');
const checkoutValidator = require('../../../validator/checkout');
const checkOutController = require('../../../controllers/api/v1/checkout/checkoutController');

const checkoutAPI = express.Router();
checkoutAPI.use(signedInMiddleware);

/**
 * @api {post} /v1/checkout Get Checkout
 * @apiVersion 1.0.0
 * @apiGroup Checkout
 *
 * @apiParam {Array} itemIDs List of cartIDs 

 *
 * @apiSuccess {Object} data Data of checkout
 * @apiSuccess {Array} data.items  Array of items for checkout
 * @apiSuccess {int} data.items[].id  Item's ID
 * @apiSuccess {int} data.items[].quantity  Item's quantity
 * @apiSuccess {int} data.items[].size Item's size
 * @apiSuccess {String} data.items[].title  Item's title
 * @apiSuccess {int} data.items[].price  Item's price
 * @apiSuccess {String} data.items[].imgURL Item's image URL
 * @apiSuccess {Object} data.address User's address data
 * @apiSuccess {String} data.address.fullAddress User's full address
 * @apiSuccess {Object} data.address.phone Receiver contact
 * @apiSuccess {int} data.shipmentCost Shipment cost
 * @apiSuccess {int} data.totalCost Total
 *
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
     "data": {
        "items": [
            {
                "id": 1,
                "quantity": 1,
                "size": 39,
                "title": "ULTRA BOOST DNA CTY",
                "price": 2690000,
                "imgURL": "http://localhost:8000/apidocs/img/ULTRA-BOOST-DNA-CTY.webp"
            },
            {
                "id": 2,
                "quantity": 2,
                "size": 42,
                "title": "ULTRA BOOST 2021 COREBLACK",
                "price": 2690000,
                "imgURL": "http://localhost:8000/apidocs/img/ULTRA-BOOST-2021-COREBLACK.jpg"
            },
            {
                "id": 3,
                "quantity": 1,
                "size": 42,
                "title": "ULTRA BOOST 2021 VIVID RED",
                "price": 2690000,
                "imgURL": "http://localhost:8000/apidocs/img/ULTRA-BOOST-2021-VIVID-RED.jpg"
            }
        ],
        "address": {
            "fullAddress": "17 Phan Trọng Tuệ, Xã Tam Hiệp, Tỉnh Lạng Sơn, Thành phố Hà Nội",
            "phone": "0961457896"
        },
        "shipmentCost": 35000,
        "totalCost": 10795000
    }
}
 *
 * @apiError Fail Failed to get checkout info because wrong cartIDs
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
                {
                    "value": "[1,2,4]",
                    "msg": "Wrong itemIDs",
                    "param": "itemIDs",
                    "location": "query",
                }
            ]
 *     }
 */
checkoutAPI.get(
  '/',
  checkoutValidator.checkout,
  checkOutController.getCheckout,
);

module.exports = checkoutAPI;
