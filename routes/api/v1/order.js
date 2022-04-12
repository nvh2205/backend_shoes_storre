const express = require('express');
const router = express.Router();

const orderController = require('../../../controllers/api/v1/order/orderController');
const signedInMiddleware = require('../../../middleware/signedIn');
const orderValidator = require('../../../validator/order');

/**
 * @api {post} /v1/cart/?id=[""] Post Checkout
 * @apiVersion 1.0.0
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiGroup Order
 *

 * @apiParam {String} address Order's Address

 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.success
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
  "data": {
   "success": true

  }
}
 *
 * @apiError Failed to post post checkout
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
                {
                   "msg":"BAD_REQUEST"
                },
            ]
 *     }
 */
router.post('/checkout', signedInMiddleware,orderValidator.postOrder ,orderController.postCheckout);

module.exports = router;
