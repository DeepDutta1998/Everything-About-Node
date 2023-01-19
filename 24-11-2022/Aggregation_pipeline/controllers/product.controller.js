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
            let: {
              categoryId: '$category',
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ['$_id', '$$categoryId'] }],
                  },
                },
              },
            ],
            as: 'category',
          },
        },
        // {
        //   allProduct: {
        //     $filter: {
        //       input: '$allProduct',
        //       as: 'category',
        //       cond: { $gte: ['$$product.productPrice', 1000] },
        //     },
        //   },
        // },
        {
          $project: {
            createdAt: 0,
            updatedAt: 0,
            'category.createdAt': 0,
            'category.updatedAt': 0,
          },
        },
        {
          $unwind: {
            path: '$category',
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
