const CRUD = require('../model/crudApi.model')

class crudApiControllers {
  /**
   * @Method:showMessage
   * @Descripton: To show a message
   */
  async showMessage(req, res) {
    try {
      return res.status(200).json({
        message: 'Welcome',
      })
    } catch (err) {
      throw err
    }
  }
}

module.exports = new crudApiControllers()
