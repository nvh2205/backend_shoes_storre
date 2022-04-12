const express = require('express');

const authController = require('../../../controllers/api/v1/auth/authController');
const userController = require('../../../controllers/api/v1/user/userController');

const signedInMiddleware = require('../../../middleware/signedIn');
const authValidator = require('../../../validator/auth');
const checkoutAPI = require('./checkout');
const userRouter = require('./user');

const apiRouterV1 = express.Router();

const productRouter = require('./product');
const brandRouter = require('./brand');
const provinceRouter = require('./provinces');
const cartRouter = require('./cart');
const orderRouter = require('./order');

apiRouterV1.use(cartRouter);
apiRouterV1.use(orderRouter);

/**
 * 
 * @api {post} /v1/login Login
 * @apiVersion 1.0.0
 * @apiGroup Authenticate
 *
 * @apiParam {String} username
 * @apiParam {String} password user's password
 *
 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.token  Raw token for authenticating
 * @apiSuccess {String} data.user  Data of logged user
 * @apiSuccess {String} data.user.id  ID of logged user
 * @apiSuccess {String} data.user.username Username of logged user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *         "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6",
 *         "user": {
 *           "id": 1,
 *           "username": "adamsandler123"
 *         }
 *       }
 *     }
 *
 * @apiError Fail Failed to login because invalid email or password 
 * @apiError Fail Failed to login because wrong email or password
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
                {
                    "value": "",
                    "msg": "Username is invalid",
                    "param": "username",
                    "location": "body"
                },
                {
                    "value": "",
                    "msg": "Username is invalid",
                    "param": "password",
                    "location": "body"
                }
            ]
 *     }
 */
apiRouterV1.post('/login', authValidator.login, authController.login);

/**
 * @api {post} /v1/register Register
 * @apiVersion 1.0.0
 * @apiGroup Authenticate
 *
 * @apiParam {String} username
 * @apiParam {String} password user's password
 * @apiParam {String} fullname user's fullname
 * @apiParam {String} email user's email
 * @apiParam {String} phone user's phone
 *
 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.token  Raw token for authenticating
 * @apiSuccess {String} data.user  Data of registered user
 * @apiSuccess {String} data.id  ID of registered user
 * @apiSuccess {String} data.username Username of registered user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *         "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6",
 *         "user": {
 *           "id": 1,
 *           "username": "adamsandler123"
 *         }
 *       }
 *     }
 *
 * @apiError Fail Failed to register because of invalid username, password, fullname, phone, email, 
 * @apiError Fail Failed to register because username is invalid 
            (valid: not in use, only contains 5-30 characters including: letters(a-z, A-Z), numbers(0-9), (.) and (_))
 * @apiError Fail Failed to register because fullname is invalid 
             (valid: up to 60 characters, not contain endline)   
 * @apiError Fail Failed to register because password is invalid  
             (valid: Password contains 6-12 characters including : at least 1 UPPERCASE (A-Z), 1 lowercase (a-z), 
              1 number (0-9), 1 special character(!@#$%^&*)) 
 * @apiError Fail Failed to register because email is invalid     
             (valid: not in use, contains 17-45 characters, email's username only include: letters(a-z, A-Z), numbers(0-9), 
             email's domain: @gmail.com only)
*  @apiError Fail Fail to register because phone is invalid 
             (valid: not in use, Vietnam phone number, contain only 10 characters)

 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
                {
                    "value": "rossgeller357",
                    "msg": "Username have been already in use",
                    "param": "username",
                    "location": "body"
                },
                {
                    "value": "ross",
                    "msg": "Password contains 6-12 characters including : at least 1 UPPERCASE (A-Z), 1 lowercase (a-z), 1 number (0-9), 1 special character(!@#$%^&*)) ",
                    "param": "password",
                    "location": "body"
                },
                {
                    "value": "rossgeller357gmail.com",
                    "msg": "Email must be valid, contains 17-45 characters, @gmail.com only",
                    "param": "email",
                    "location": "body"
                },
                {
                    "value": "0987456124",
                    "msg": "Phone have been already in use",
                    "param": "phone",
                    "location": "body"
                }
            ]
 *     }
 */
apiRouterV1.post('/register', authValidator.register, authController.register);

/**
 * @api {post} /v1/forgot-password Forgot Password
 * @apiVersion 1.0.0
 * @apiGroup Authenticate
 *
 * @apiParam {String} email user's email
 *
 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.token  Raw token for authenticating
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": {
 *         "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6",
 *       }
 *     }
 *
 * @apiError Failed to forgot pass word because wrong email 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
               "msg":"BAD_REQUEST"
            ]
 *     }
 */
apiRouterV1.post(
  '/forgot-password',
  authValidator.postForgotPassword,
  authController.forgotPassword,
);

/**
 * @api {post} /v1/verification Verification code Sent in registered mail
 * @apiVersion 1.0.0
 * @apiGroup Authenticate
 *
 * @apiParam {String} token 
 * @apiParam {Integer} verification
 *
 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.token  Raw token for authenticating
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
        {
        "data": {
        "success": true,
        }
        }
 *
 * @apiError Failed to forgot pass word because wrong email 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
               "msg":"BAD_REQUEST"
            ]
 *     }
 */
apiRouterV1.post(
  '/verification',
  authValidator.postVerification,
  authController.verificationForgotPassword,
);

/**
 * @api {post} /v1/reset-password/:verification Reset password
 * @apiVersion 1.0.0
 * @apiGroup Authenticate
 *
 * @apiParam {String} token 
 * @apiParam {password} New pasword
 *
 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.token  Raw token for authenticating
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
        {
        "data": {
        "success": true,
        }
        }
 *
 * @apiError Failed to reset pass word because wrong token or verification 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
               "msg":"BAD_REQUEST"
            ]
 *     }
 */
apiRouterV1.post(
  '/reset-password/:verification',
  authValidator.postResetPassword,
  authController.resetPassword,
);

/**
 * @api {get} /v1/me Get info user
 * @apiVersion 1.0.0
 *  @apiHeader Authorization Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNjQ2MDQ3Njk4OTYwLCJleHAiOjE2NDYwNDc3ODUzNjB9.IXyQCUhBmxRQegzlgIxYmT-j8pGvZrII7zdqmtiV20I
 * @apiGroup Authenticate
 *
 * @apiSuccess {Object} data Data for authenticating
 * @apiSuccess {String} data.id Id of user
 * @apiSuccess {String} data.username username in user's account
 * @apiSuccess {String} data.fullname user's fullname
 * @apiSuccess {String} data.email user's email'
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
  "data": {
    "id": "1",
    "username": "harrystyle156",
    "fullname": "Harry Style",
    "phone": "0963315017",
    "email": "harrystyle@gmail.com",
    "createdAt": "2022-04-20T03:55:21.000Z",
    "updatedAt": null,
    "deletedAt": null
  }
}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "errors": [
               "msg":"Unauthorized"
            ]
 *     }
 */
apiRouterV1.get('/me', signedInMiddleware, userController.myProfile);
apiRouterV1.use('/checkout', signedInMiddleware, checkoutAPI);
apiRouterV1.use('/user', signedInMiddleware, userRouter);

apiRouterV1.use('/products', signedInMiddleware, productRouter);
apiRouterV1.use('/brands', signedInMiddleware, brandRouter);
apiRouterV1.use('/provinces', signedInMiddleware, provinceRouter);
module.exports = apiRouterV1;
