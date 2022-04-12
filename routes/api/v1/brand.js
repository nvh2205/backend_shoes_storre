const express = require('express');

const router = express.Router();
const brandController = require('../../../controllers/api/v1/brand/brandController');
// get list brands
/**
 * 
 * @api {get} /v1/brands Get list brand
 * @apiVersion 1.0.0
 * @apiGroup Brands
 *
 * @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiSuccess {Number} data.id	id of brand
 * @apiSuccess {Number} data.name		brand name
 * @apiSuccess {Number} data.imgURL		img of brand

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
          "data": [
          {
            id: 1,
            name: "nike",
            imgURL: "/brands/1.jpg",
            
          },
          {
            id: 2,
            name: "adidas",
            imgURL: "/brands/2.jpg",
          },
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
router.get('/', brandController.getListBrand);

module.exports = router;
