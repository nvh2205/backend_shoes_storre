const express = require('express');

const router = express.Router();
const productController = require('../../../controllers/api/v1/product/productController');
// get list product in homepage
/**
 * 
 * @api {get} /v1/products Get List Product
 * @apiVersion 1.0.0
 * @apiGroup Products
 * @apiName Get Products
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiParam {Number} limit limit products
 * @apiParam {Number} page pagination
 * @apiParam {String} search text search
 * @apiParam {Number} brand brand of products
 *
 * @apiSuccess {Object} data.pagination.currentPage No of requested page 
 * @apiSuccess {String} data.pagination.totalPage Total pages can be shown based on query
 * @apiSuccess {String} data.pagination.totalPerPage Total products in the requested page
 * @apiSuccess {String} data.products List of products in the requested page
 * @apiSuccess {String} data.products[].id Id of a product
 * @apiSuccess {String} data.products[].title	Title of a product
 * @apiSuccess {String} data.products[].price Price of a product
 * @apiSuccess {String} data.products[].imgURL URL of product's image

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "data": {
          "currentPage": 3,
          "totalPage": 4,
          "totalProducts": 10,
          "products": [
            {
              "id": 7,
              "BrandId": 4
              "title": "Intelligent Metal Soap",
              "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
              "imgURL": "http://placeimg.com/640/480/sports",
              "price": 743,
              "createdAt": "2022-01-25T14:36:14.000Z",
              "updatedAt": "2022-01-25T15:45:35.000Z",
            },
            {
              "id": 5,
              "BrandId": 3
              "title": "Practical Cotton Computer",
              "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
              "imgURL": "http://placeimg.com/640/480/sports",
              "price": 937,
              "createdAt": "2022-01-25T13:21:35.000Z",
              "updatedAt": "2022-01-25T16:36:40.000Z",
            }
          ]
        }
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
router.get('/', productController.getListProduct);
// get product detail
/**
 * 
 * @api {get} /v1/products/:idProduct Get Products
 * @apiVersion 1.0.0
 * @apiGroup Products
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiParam {Number} idProduct 
 * 
 * @apiSuccess {String} data.products.id Id of a product
 * @apiSuccess {String} data.products.title Title of a product
 * @apiSuccess {String} data.products.price Price of a product
 * @apiSuccess {String} data.products.imgURL URL of product's image
 * @apiSuccess {String} data.description description product
 * @apiSuccess {String} data.brandId brand of product

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
          "data": {
            "id": 1,
            "title": "Practical Metal Chicken",
            "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
            "imgURL": "http://placeimg.com/640/480/sports",
            "price": 218,
            "createdAt": "2022-01-26T06:12:49.000Z",
            "updatedAt": "2022-01-25T23:04:20.000Z",
            "BrandId": 1,
            "total":10
          }
        }
 *
 * @apiError idproduct invalid
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     {
        "errors": [
          {
            "msg": "Bad request"
          }
        ]
      }
 */
router.get('/:ProductId', productController.getProductData);
// get size of product
/**
 * 
 * @api {get} /v1/products/:idProduct/sizes Get size products
 * @apiVersion 1.0.0
 * @apiGroup Products
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiParam {Number} idProduct 
 * 
 * @apiSuccess {Number} data.id	size id of a product
 * @apiSuccess {Number} data.sizes size 
 * @apiSuccess {Number} data.availableQuantity quantity of size
 * @apiSuccess {Number} ProductId	id of products

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "data": [
          {
            "id": 1,
            "size": 35,
            "availableQuantity": 100,
            "createdAt": "2022-02-07T05:22:57.000Z",
            "updatedAt": "2022-02-07T05:22:57.000Z",
            "ProductId": 1
          },
          {
            "id": 2,
            "size": 37,
            "availableQuantity": 100,
            "createdAt": "2022-02-07T05:23:28.000Z",
            "updatedAt": "2022-02-07T05:23:28.000Z",
            "ProductId": 1
          },
          {
            "id": 3,
            "size": 38,
            "availableQuantity": 100,
            "createdAt": "2022-02-07T05:23:49.000Z",
            "updatedAt": "2022-02-07T05:23:49.000Z",
            "ProductId": 1
          }
        ]
      }
 *
 * @apiError idproduct invalid
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
     {
        "errors": [
          {
            "msg": "API not found"
          }
        ]
      }
 */
router.get('/:ProductId/sizes', productController.getSizeProduct);

module.exports = router;
