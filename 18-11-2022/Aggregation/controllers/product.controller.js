const Product = require('../models/product.model')
const Category = require('../models/category.model')

class ProductController {
  async showProductForm(req, res) {
    try {
      let allCategory = await Category.find({})
      res.render('add-product', {
        allCategory,
        message: req.flash('message'),
      })
    } catch (err) {
      throw err
    }
  }

  async addProduct(req, res) {
    try {
      // console.log(req.body)
      let saveProduct = await Product.create(req.body)
      if (saveProduct && saveProduct._id) {
        req.flash('message', 'Product Added successfully')
        res.redirect('/show-product-form')
      } else {
        req.flash('message', 'Product Not Added successfully')
        res.redirect('/show-product-form')
      }
    } catch (err) {
      throw err
    }
  }

  async showProductTable(req, res) {
    try {
      let allProduct = await Product.aggregate([
        {
          $lookup: {
            from: 'categories',
            localField: 'category',
            foreignField: '_id',
            as: 'categoryName',
          },
        },
        {
          $unwind: {
            path: '$categoryName',
          },
        },
        {
          $project: {
            category: 0,
            createdAt: 0,
            updatedAt: 0,
            'categoryName.createdAt': 0,
            'categoryName.updatedAt': 0,
          },
        },
      ])
      console.log(allProduct)
      res.render('view-product', {
        allProduct,
      })
    } catch (err) {
      throw err
    }
  }
}

module.exports = new ProductController()
