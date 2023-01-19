const Category = require('../models/category.model')

class categoryController {
  /* 
   @Method:showCategory
   @Description: To Show The Category Form

*/
  async showCategory(req, res) {
    try {
      res.render('add-category', {
        message: req.flash('message'),
      })
    } catch (err) {
      throw err
    }
  }

  /* 
     @Method:addCategory,
     @Description: To Add Category
  
  */

  async addCategory(req, res) {
    try {
      req.body.category = req.body.category
      let saveCategory = await Category.create(req.body)
      if (saveCategory && saveCategory._id) {
        req.flash('message', 'Category Added Successfully!')
        res.redirect('/add-category')
      } else {
        req.flash('message', 'Category Not Added Successfully!')
        res.redirect('/add-category')
      }
    } catch (err) {
      throw err
    }
  }

  /* 
         @Method:viewCategory
         @Description:To show category
     
     */

  async viewCategory(req, res) {
    try {
      let allCategory = await Category.find({})
      res.render('view-category', {
        allCategory
      })
    } catch (err) {
      throw err
    }
  }
}

module.exports = new categoryController()
