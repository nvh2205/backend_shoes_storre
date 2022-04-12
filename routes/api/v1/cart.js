const express = require('express');
const router = express.Router();

const cartController = require('../../../controllers/api/v1/cart/cartController');
const cartValidator = require('../../../validator/cart');

const signedInMiddleware = require('../../../middleware/signedIn');

/**
 * @api {post} /v1/cart Add to Cart
 * @apiVersion 1.0.0
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiGroup Cart
 *
 * @apiParam {Integer} productSizeId id of chosen product
 * @apiParam {Integer} quantity size's quantity

 *
 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {Integer} data.id Id of cart
  * @apiSuccess {Integer} data.userId Id of user
 * @apiSuccess {Integer} data.productSizeId Id of size referenced by item
 * @apiSuccess {Integer} data.quantity  Quantity of the item in cart
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "data": {
 *        "id": 8,
 *        "userId": 7,
 *        "productSizeId": 1,
 *        "quantity": 4,
 *        "createdAt": "2022-02-09T07:44:22.000Z",
 *        "updatedAt": "2022-02-10T02:50:30.918Z"
    *}
  *}
 *
 * @apiError Failed to add to cart because wrong quantity not enough
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
router.post(
  '/cart',
  signedInMiddleware,
  cartValidator.postQuantityCart,
  cartController.createCart,
);


/**
 * @api {get} /v1/cart Get Cart
 * @apiVersion 1.0.0
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiGroup Cart
 *


 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {Integer} data.cartId Cart Id
  * @apiSuccess {Integer} data.productId ProductId
 * @apiSuccess {Integer} data.price Price of item
 * @apiSuccess {Integer} data.size Size number  
 *   @apiSuccess {Integer} data.quantity Item's quantity in cart 
 *  @apiSuccess {String} data.imgURL URL of item's image
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "data": {
 *        "cartId": 8,
 *        "productId": 7,
 *        "quantity": 1,
 *        "size": 4,
 *        "imgURL": null,
 *        "price": 2022
    *}
  *}
 *
 * @apiError Failed to get to cart
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
router.get('/cart', signedInMiddleware, cartController.getInfoCart);

/**
 * @api {put} /v1/cart Update Cart
 * @apiVersion 1.0.0
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiGroup Cart
 *


 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.success
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "data": {
        "success": true
    }
}
  *}
 *
 * @apiError Failed to put to cart
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
router.put(
  '/cart/:id',
  signedInMiddleware,
  cartValidator.postUpdateCartItem,
  cartController.updateCart,
);


/**
 * @api {delete} /v1/cart/:id Delete Cart
 * @apiVersion 1.0.0
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiGroup Cart
 *


 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.success
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "data": {
        "success": true
    }
}
  *}
 *
 * @apiError Failed to delete to cart
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
router.delete('/cart/:id', signedInMiddleware, cartController.deleteCart);

module.exports = router;
