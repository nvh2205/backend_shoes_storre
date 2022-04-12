const { ERROR_MESSAGES } = require('../../../../utils/constants');
const productService = require('../../../../services/productService');

exports.getListProduct = async (req, res) => {
  const search = req.query.search || '';
  const limit =
    Number.isInteger(Number(req.query.limit)) &
    (Number(req.query.limit) <= 20) &
    (Number(req.query.limit) > 0)
      ? Number(req.query.limit)
      : 20;
  const page =
    Number.isInteger(Number(req.query.page)) & (Number(req.query.page) > 1)
      ? Number(req.query.page)
      : 1;
  const brand = req.query.brand || null;
  const query = {
    search,
    limit,
    skip: (page - 1) * limit,
    brand,
  };
  let result = null;

  if (brand != null) {
    result = await productService.getListProductWithBrand(query);
  } else {
    result = await productService.getListProduct(query);
  }
  const dataResult = {
    currentPage: page,
    totalPage: Math.ceil(result.count / limit),
    totalProducts: result.count,
    products: result.rows,
  };
  res.success(dataResult);
};
exports.getProductData = async (req, res) => {
  if (!Number.isInteger(Number(req.params.ProductId))) {
    return res.error({ msg: ERROR_MESSAGES.BAD_REQUEST });
  }
  const dataProduct = await productService.getProductById(req.params.ProductId);
  const totalProduct = await productService.getTotalProduct(
    req.params.ProductId,
  );

  if (dataProduct) {
    dataProduct.total = totalProduct;
    res.success(dataProduct);
  } else {
    res.error({ msg: ERROR_MESSAGES.API_NOT_FOUND });
  }
};
exports.getSizeProduct = async (req, res) => {
  if (Number.isInteger(Number(req.params.ProductId))) {
    const listSize = await productService.getListSizeProduct(
      req.params.ProductId,
    );
    if (listSize) {
      res.success(listSize);
    } else {
      res.error({ msg: ERROR_MESSAGES.API_NOT_FOUND });
    }
  } else {
    res.error({ msg: ERROR_MESSAGES.BAD_REQUEST });
  }
};
