import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js'
import {
  createProductController,
  getAllProductsController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
} from './../controllers/productController.js'
import formidable from 'express-formidable'

const router = express.Router()

// routes
router.post(
  '/create-product',
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
)

// update product
router.put(
    '/update-product/:pid',
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  )


// get products
router.get('/get-products', getAllProductsController)

// single product
router.get('/get-products/:slug', getSingleProductController)

// get photo
router.get('/product-photo/:pid', productPhotoController)

// delete product
router.delete('/product/:pid', deleteProductController)

export default router
