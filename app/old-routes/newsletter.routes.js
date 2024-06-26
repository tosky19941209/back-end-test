const {authJwt} = require('../middleware')
const controller = require('../controllers/newsletter.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    )
    next()
  })
  
  app.post('/api/admin/savenewsletter', controller.createNewsletter);
  app.get("/api/admin/newsletter", controller.getNewsLetter);
}
