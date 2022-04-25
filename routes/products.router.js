const { Router } = require("express");
const { verifyToken } = require("../middleware/verifyToken");
const { 
    createProduct, 
    deleteProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct,
} = require("../controllers/products.controller");

const productRouter = Router();

productRouter.route("/").get(verifyToken, getAllProducts).post(createProduct);
productRouter
    .route("/:productId")
    .get(getSingleProduct)
    .patch(updateProduct)
    .delete(deleteProduct);

    module.exports = productRouter;