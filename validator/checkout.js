const sequelize = require('sequelize');
const { Op } = require('sequelize');
const { Cart } = require('../models/index');

exports.checkout = async (req, res, next) => {
  let itemList;
  try {
    itemList = JSON.parse(req.query.itemIDs);
  } catch (error) {
    return res.error(
      {
        errors: [
          {
            value: req.query.itemIDs,
            msg: 'Wrong itemIDs',
            param: 'itemIDs',
            location: 'query',
          },
        ],
      },
      400,
    );
  }

  const items = await Cart.findAll({
    where: {
      id: {
        [Op.in]: itemList,
      },
      UserId: req.user.id,
    },
  });
  if (items.length !== itemList.length) {
    return res.error(
      {
        errors: [
          {
            value: req.query.itemIDs,
            msg: 'Wrong itemIDs',
            param: 'itemIDs',
            location: 'query',
          },
        ],
      },
      400,
    );
  }
  req.items = itemList;

  next();
};


