const App = require('../models/app.model')

class AppController {
  /* 
    @Method:index
    @Description:To Show the add form
 
 */
  async index(req, res) {
    try {
      res.render('index')
    } catch (err) {
      throw err
    }
  }

  /* 
     @Method:insert
     @Description:To save data
  
  */

  async insert(req, res) {
    try {
      let saveData = await App.create(req.body)
      if (saveData && saveData._id) {
        console.log('Data Added')
        res.redirect('/')
      } else {
        console.log('Data Not Added')
        res.redirect('/')
      }
    } catch (err) {
      throw err
    }
  }

  /* 
     @Method:listing
     @Description:To Show Data
  
  */
  async listing(req, res) {
    try {
      let allData = await App.find({})
      res.render('listing', {
        allData,
      })
    } catch (err) {
      throw err
    }
  }

  /* 
    @Method:edit
    @Description:To show Edit Form data
  
  */
  async edit(req, res) {
    try {
      let allData = await App.find({ _id: req.params.id })
      console.log(allData)
      res.render('edit', {
        data: allData[0],
      })
    } catch (err) {
      throw err
    }
  }
}

module.exports = new AppController()
