class AdminController {
  constructor() {}

  /**
   * @Method showIndex
   * @Description To Show The Index Page / Login Page
   */
  async showIndex(req, res) {
    try {
      res.render("admin/index", {
        title: "Admin || Login",
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @Method dashboard
   * @Description To Show The Dashboard
   */
  async dashboard(req, res) {
    try {
      res.render("admin/dashboard", {
        title: "Admin || Dashboard"
      })
    } catch (err) {
      throw err;
    }
  }

  /**
   * @Method template
   * @Description Basic Template
   */
   async template(req, res) {
    try {
      res.render("admin/template", {
        title: "Admin || Template"
      })
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new AdminController();
